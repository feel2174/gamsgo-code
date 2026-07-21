import { DisclosureBanner } from "./DisclosureBanner";
import { SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-10 flex flex-col gap-3 border-t border-neutral-200 px-4 py-6">
      <DisclosureBanner />
      <p className="text-center text-xs text-neutral-400">
        © {new Date().getFullYear()} {SITE_NAME}. 가격 정보는 변동될 수 있으니
        정확한 가격은 겜스고에서 실시간으로 확인하세요.
      </p>
    </footer>
  );
}
