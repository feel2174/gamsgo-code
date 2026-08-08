// 빌드 전(prebuild) 실행: 경량 Pretendard 서브셋 폰트를 생성한다.
//
// 배경 — Lighthouse(PageSpeed)의 Lantern 시뮬레이터는 font-display 값(swap/optional)을
// 무시하고, 텍스트를 렌더하는 데 필요한 웹폰트의 (스로틀링 적용) 다운로드 시간을 그대로
// FCP·LCP에 반영한다. 따라서 랩 점수를 움직이는 유일한 레버는 "실제로 로드되는 폰트의
// 바이트 크기"다. 로컬 Lighthouse 재현 실험으로 다음을 확인했다:
//   - 원본 2MB 폰트          → LCP ~12s
//   - 2MB + display:optional → LCP ~11s (optional 무시됨)
//   - 서브셋 311KB 단일 폰트  → LCP ~2.6s, FCP ~0.7s
//   - 폰트 2개(크리티컬+풀세트)를 동시에 로드 → 대역폭 경쟁으로 오히려 악화
// 결론: 폰트는 "작은 것 하나만" 로드해야 하고, 원본 풀세트(2MB)는 어떤 경로로도
// 로드되면 안 된다(폴백 스택에서도 제외).
//
// 커버리지 — 상용 한글(KS X 1001, 2,350자) + ASCII + UI 기호 + 호환 자모 + 사이트 소스에
// 실제 등장하는 모든 문자를 합집합으로 담는다. 이 조합이 실제 한국어 텍스트(사용자 작성
// 커뮤니티 후기 포함)의 99.9%를 커버한다. 여기에도 없는 극히 드문 음절만 기기 내장 한글
// 폰트로 폴백된다(다운로드 0, 가독성 문제 없음).
//
// 가중치 축 — 사이트는 400(기본)·500·600·700·800 굵기만 사용하므로 가변 폰트의 wght 축을
// 400–800으로 인스턴싱해 파일을 439KB → 311KB로 더 줄인다. (light 300·black 900 미사용)
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";
import subsetFont from "subset-font";

const rootDir = fileURLToPath(new URL("..", import.meta.url));
const sourceDirs = ["app", "components", "lib"];
const targetExts = new Set([".ts", ".tsx"]);

function collectFiles(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name.startsWith(".")) continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...collectFiles(full));
    else if (targetExts.has(extname(entry.name))) out.push(full);
  }
  return out;
}

// 1) 사이트 소스에 실제 쓰인 문자
let sourceText = "";
for (const dir of sourceDirs) {
  for (const file of collectFiles(join(rootDir, dir))) {
    sourceText += readFileSync(file, "utf8");
  }
}

// 2) 인쇄 가능한 ASCII 전 범위(숫자·영문·기호 안전망)
let ascii = "";
for (let c = 0x20; c <= 0x7e; c++) ascii += String.fromCharCode(c);

// 3) UI에서 쓰는 기호·화살표·따옴표류
const symbols = "★☆✨❤🤍🐷⚡🌍🔄→‹›·…※○●◆■□▶◀“”‘’—–₩%°";

// 4) 한글 호환 자모(ㄱ~ㅎ, ㅏ~ㅣ 등 단독 표기)
let jamo = "";
for (let c = 0x3131; c <= 0x318e; c++) jamo += String.fromCharCode(c);

// 5) 상용 한글 완성형 2,350자(KS X 1001) — EUC-KR 바이트쌍 디코딩으로 정확히 생성
const dec = new TextDecoder("euc-kr");
let ksHangul = "";
for (let lead = 0xb0; lead <= 0xc8; lead++) {
  for (let tail = 0xa1; tail <= 0xfe; tail++) {
    const ch = dec.decode(new Uint8Array([lead, tail]));
    const code = ch ? ch.charCodeAt(0) : 0;
    if (code >= 0xac00 && code <= 0xd7a3) ksHangul += ch;
  }
}

const uniqueChars = Array.from(
  new Set(Array.from(sourceText + ascii + symbols + jamo + ksHangul))
).join("");

const srcPath = join(
  rootDir,
  "node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2"
);
const outDir = join(rootDir, "assets/fonts");
const outPath = join(outDir, "PretendardVariable-subset.woff2");

const original = readFileSync(srcPath);
const subsetBuffer = await subsetFont(original, uniqueChars, {
  targetFormat: "woff2",
  variationAxes: { wght: { min: 400, max: 800 } },
});

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, subsetBuffer);

console.log(
  `[subset-pretendard] ${uniqueChars.length}자 서브셋 생성 완료: ` +
    `${(original.length / 1024).toFixed(0)}KiB → ${(subsetBuffer.length / 1024).toFixed(0)}KiB`
);
