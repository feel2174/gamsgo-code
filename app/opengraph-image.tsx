import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const FONT_DIR = join(
  process.cwd(),
  "node_modules/pretendard/dist/public/static/alternative"
);

export default async function Image() {
  const [extraBold, medium] = await Promise.all([
    readFile(join(FONT_DIR, "Pretendard-ExtraBold.ttf")),
    readFile(join(FONT_DIR, "Pretendard-Medium.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(160deg, #ffffff 0%, #fff5f5 100%)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 20px",
              marginBottom: "36px",
              borderRadius: "999px",
              background: "#fff1f2",
              color: "#e11d48",
              fontSize: 26,
              fontWeight: 800,
            }}
          >
            {SITE_TAGLINE}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 66,
              lineHeight: 1.35,
              fontWeight: 800,
              color: "#18181b",
              maxWidth: 980,
            }}
          >
            정가보다 최대 70% 저렴한
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 66,
              lineHeight: 1.35,
              fontWeight: 800,
              color: "#e11d48",
              maxWidth: 980,
            }}
          >
            구독 서비스 할인 모음
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: "14px", marginBottom: "40px" }}>
            {["유튜브 프리미엄", "넷플릭스", "챗GPT Plus"].map((label) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  padding: "10px 20px",
                  borderRadius: "999px",
                  background: "#ffffff",
                  border: "1px solid #fecdd3",
                  color: "#27272a",
                  fontSize: 26,
                  fontWeight: 500,
                }}
              >
                {label}
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "36px",
              borderTop: "1px solid #fecdd3",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontSize: 36,
                fontWeight: 800,
                color: "#18181b",
              }}
            >
              <span>🐷</span>
              <span>{SITE_NAME}</span>
            </div>
            <div style={{ display: "flex", fontSize: 26, color: "#71717a" }}>
              gamsgocode.co.kr
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Pretendard", data: extraBold, style: "normal", weight: 800 },
        { name: "Pretendard", data: medium, style: "normal", weight: 500 },
      ],
    }
  );
}
