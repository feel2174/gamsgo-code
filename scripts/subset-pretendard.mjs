// 빌드 전 실행: 사이트 정적 소스에 실제로 쓰인 문자만 담은 경량 Pretendard 서브셋을 생성한다.
// Lighthouse의 Lantern 시뮬레이터는 font-display 값을 반영하지 않고 폰트 리소스의
// 다운로드 시간을 그대로 LCP 렌더 지연으로 계산하므로, display 옵션이 아니라 파일 크기
// 자체를 줄여야 LCP 랩 스코어가 개선된다. 원본 가변 폰트(2MB, 전체 한글 음절 포함)는
// 비프리로드 폴백 폰트로 그대로 두고, 이 서브셋을 우선 로드해 초기 렌더링을 커버한다.
// 서브셋에 없는 글자(커뮤니티 사용자 작성 글의 희귀 음절 등)는 자동으로 폴백 폰트로 넘어간다.
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

let text = "";
for (const dir of sourceDirs) {
  const files = collectFiles(join(rootDir, dir));
  for (const file of files) {
    text += readFileSync(file, "utf8");
  }
}

// 코드 문법에 없는 인쇄 가능 ASCII 전 범위를 안전하게 보강(숫자·기호 안전망)
for (let code = 0x20; code <= 0x7e; code++) {
  text += String.fromCharCode(code);
}

const uniqueChars = Array.from(new Set(Array.from(text))).join("");

const srcPath = join(
  rootDir,
  "node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2"
);
const outDir = join(rootDir, "assets/fonts");
const outPath = join(outDir, "PretendardVariable-subset.woff2");

const original = readFileSync(srcPath);
const subsetBuffer = await subsetFont(original, uniqueChars, {
  targetFormat: "woff2",
});

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, subsetBuffer);

console.log(
  `[subset-pretendard] ${uniqueChars.length}자 서브셋 생성 완료: ` +
    `${(original.length / 1024).toFixed(0)}KiB → ${(subsetBuffer.length / 1024).toFixed(0)}KiB`
);
