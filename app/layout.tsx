import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE_NAME } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${SITE_NAME} — 유튜브 프리미엄, 넷플릭스, 챗GPT 구독료 할인 정보`,
  description:
    "유튜브 프리미엄, 넷플릭스, 챗GPT Plus 등 구독 서비스를 최대 70% 저렴하게 이용하는 방법을 정리했습니다.",
  verification: {
    other: {
      "naver-site-verification": "c9f34b179e94c1dfd5cbb648cf335ea0981f6bbd",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-neutral-900 dark:bg-black dark:text-neutral-100">
        <Header />
        <main className="mx-auto w-full max-w-[420px] flex-1 px-4 py-6">
          {children}
        </main>
        <div className="mx-auto w-full max-w-[420px]">
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
