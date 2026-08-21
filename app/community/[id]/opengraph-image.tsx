import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { getPost } from "@/lib/community/store";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export const alt = "겜스고코드 찐후기";
// 2x resolution (120:63 ratio) — vector-sourced, stays crisp when scaled up.
export const size = { width: 2400, height: 1260 };
export const contentType = "image/png";

const FONT_DIR = join(
  process.cwd(),
  "node_modules/pretendard/dist/public/static/alternative"
);

export default async function Image({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPost(id);

  const eyebrow = post
    ? `${post.serviceCategory} · ${post.postType}`
    : SITE_TAGLINE;
  const title = post ? post.title : "겜스고코드 찐후기 게시판";

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
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -140,
            width: 700,
            height: 700,
            borderRadius: 700,
            background: "radial-gradient(circle, rgba(244,63,94,0.20), transparent 66%)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
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
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Pretendard",
              fontSize: 104,
              lineHeight: 1.32,
              fontWeight: 800,
              color: "#18181b",
              letterSpacing: -2.5,
              maxWidth: 1900,
              wordBreak: "keep-all",
            }}
          >
            {title.length > 42 ? `${title.slice(0, 42)}…` : title}
          </div>
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
