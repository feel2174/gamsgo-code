import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // 과거 이 도메인에서 운영되던 블로그(/post/*)의 잔존 색인 URL을
        // 홈으로 영구 리다이렉트. 현재 코드베이스에는 해당 라우트가 없음.
        source: "/post/:slug*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
