import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "张紫茹 | 数据驱动的营销人",
  description:
    "在营销与产品的交界处，用数据讲故事。中国传媒大学广告学在读，字节跳动飞书To B营销实习生。",
  keywords: "张紫茹, 市场营销, 产品运营, 数据分析, 字节跳动, 飞书, 用户洞察",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled } = await draftMode();
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className={`${inter.className} text-editorial-body antialiased`}>
        <div
          className="fixed inset-0 -z-10"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
          }}
          aria-hidden
        />

        <SiteHeader />

        <div className="pt-[72px]">{children}</div>
        {isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}
