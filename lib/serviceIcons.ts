import {
  siYoutube,
  siNetflix,
  siSpotify,
  siClaude,
  siGooglegemini,
  siPerplexity,
  siGithubcopilot,
  siCursor,
  siDeepl,
  siAppletv,
  siCrunchyroll,
  siApplemusic,
  siNotion,
  siFigma,
  siExpressvpn,
  siPlaystation,
  siEa,
} from "simple-icons";
import type { ServiceId } from "@/lib/constants";

export type ServiceIcon =
  | { kind: "brand"; path: string; hex: string }
  | { kind: "letter"; letter: string; hex: string };

/**
 * simple-icons(MIT 라이선스 SVG 데이터)에 등록된 서비스는 공식 브랜드 마크를 사용.
 * 등록되지 않은 서비스(챗GPT/디즈니+/캔바/프라임비디오/MS365/어도비/Xbox/젠스파크/미드저니 등)는
 * 상표권 이슈를 피하기 위해 브랜드 컬러만 반영한 이니셜 배지로 대체.
 */
export const SERVICE_ICONS: Record<ServiceId, ServiceIcon> = {
  "youtube-premium": { kind: "brand", path: siYoutube.path, hex: siYoutube.hex },
  netflix: { kind: "brand", path: siNetflix.path, hex: siNetflix.hex },
  "chatgpt-plus": { kind: "letter", letter: "G", hex: "10A37F" },
  "disney-plus": { kind: "letter", letter: "D", hex: "113CCF" },
  spotify: { kind: "brand", path: siSpotify.path, hex: siSpotify.hex },
  claude: { kind: "brand", path: siClaude.path, hex: siClaude.hex },
  gemini: { kind: "brand", path: siGooglegemini.path, hex: siGooglegemini.hex },
  genspark: { kind: "letter", letter: "G", hex: "1F2937" },
  perplexity: { kind: "brand", path: siPerplexity.path, hex: siPerplexity.hex },
  midjourney: { kind: "letter", letter: "M", hex: "000000" },
  "github-copilot": {
    kind: "brand",
    path: siGithubcopilot.path,
    hex: siGithubcopilot.hex,
  },
  cursor: { kind: "brand", path: siCursor.path, hex: siCursor.hex },
  deepl: { kind: "brand", path: siDeepl.path, hex: siDeepl.hex },
  canva: { kind: "letter", letter: "C", hex: "00C4CC" },
  "prime-video": { kind: "letter", letter: "P", hex: "00A8E1" },
  "apple-tv": { kind: "brand", path: siAppletv.path, hex: siAppletv.hex },
  crunchyroll: { kind: "brand", path: siCrunchyroll.path, hex: siCrunchyroll.hex },
  "apple-music": { kind: "brand", path: siApplemusic.path, hex: siApplemusic.hex },
  "microsoft-365": { kind: "letter", letter: "M", hex: "1B1B1B" },
  notion: { kind: "brand", path: siNotion.path, hex: siNotion.hex },
  figma: { kind: "brand", path: siFigma.path, hex: siFigma.hex },
  expressvpn: { kind: "brand", path: siExpressvpn.path, hex: siExpressvpn.hex },
  "adobe-cc": { kind: "letter", letter: "Cc", hex: "DA1F26" },
  "playstation-plus": {
    kind: "brand",
    path: siPlaystation.path,
    hex: siPlaystation.hex,
  },
  "xbox-game-pass": { kind: "letter", letter: "X", hex: "107C10" },
  "ea-play": { kind: "brand", path: siEa.path, hex: siEa.hex },
};
