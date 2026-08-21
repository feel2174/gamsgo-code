import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
// 2x resolution (120:63 ratio) — vector-sourced, stays crisp when scaled up.
export const size = { width: 2400, height: 1260 };
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
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "128px 144px",
          background: "linear-gradient(155deg, #ffffff 0%, #fff2f1 62%, #ffe7e5 100%)",
          overflow: "hidden",
        }}
      >
        {/* depth glow + floating discount card on the negative-space side */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -140,
            width: 720,
            height: 720,
            borderRadius: 720,
            background:
              "radial-gradient(circle, rgba(244,63,94,0.22), transparent 66%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 250,
            right: 150,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: 300,
            height: 300,
            borderRadius: 56,
            background: "linear-gradient(150deg, #f43f5e 0%, #dc312d 100%)",
            boxShadow: "0 60px 110px rgba(220,49,45,0.45), inset 0 4px 0 rgba(255,255,255,0.35)",
            transform: "rotate(8deg)",
          }}
        >
          <div style={{ display: "flex", fontFamily: "Pretendard", fontWeight: 800, fontSize: 150, color: "#ffffff", lineHeight: 1 }}>
            70%
          </div>
          <div style={{ display: "flex", fontFamily: "Pretendard", fontWeight: 800, fontSize: 46, color: "#ffe3e1", marginTop: 8 }}>
            할인
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "16px 36px",
              marginBottom: 56,
              borderRadius: 999,
              background: "#ffffff",
              border: "1px solid #fbcfcd",
              boxShadow: "0 18px 40px rgba(220,49,45,0.12)",
              color: "#dc312d",
              fontFamily: "Pretendard",
              fontSize: 46,
              fontWeight: 800,
            }}
          >
            {SITE_TAGLINE}
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Pretendard",
              fontSize: 120,
              lineHeight: 1.28,
              fontWeight: 800,
              color: "#18181b",
              letterSpacing: -3,
            }}
          >
            정가보다 최대 70% 저렴한
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Pretendard",
              fontSize: 120,
              lineHeight: 1.28,
              fontWeight: 800,
              color: "#dc312d",
              letterSpacing: -3,
            }}
          >
            구독 서비스 할인 모음
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: 24, marginBottom: 72 }}>
            {["유튜브 프리미엄", "넷플릭스", "챗GPT Plus"].map((label) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  padding: "18px 36px",
                  borderRadius: 999,
                  background: "#ffffff",
                  border: "1px solid #fddad9",
                  boxShadow: "0 10px 26px rgba(24,24,27,0.06)",
                  color: "#27272a",
                  fontFamily: "Pretendard",
                  fontSize: 44,
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
              paddingTop: 64,
              borderTop: "2px solid #fbcfcd",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 22,
                fontFamily: "Pretendard",
                fontSize: 62,
                fontWeight: 800,
                color: "#18181b",
              }}
            >
              <span>🐷</span>
              <span>{SITE_NAME}</span>
            </div>
            <div style={{ display: "flex", fontFamily: "Pretendard", fontSize: 44, color: "#71717a" }}>
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
