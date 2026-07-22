import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { getPost } from "@/lib/community/store";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export const alt = "짠구독 찐후기";
export const size = { width: 1200, height: 630 };
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
  const title = post ? post.title : "짠구독 찐후기 게시판";

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
              alignSelf: "flex-start",
              padding: "8px 20px",
              marginBottom: "36px",
              borderRadius: "999px",
              background: "#fff1f2",
              color: "#e11d48",
              fontSize: 26,
              fontWeight: 800,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 58,
              lineHeight: 1.4,
              fontWeight: 800,
              color: "#18181b",
              maxWidth: 1000,
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
