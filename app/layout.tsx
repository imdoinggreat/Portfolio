import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "张紫茹 | 数据驱动的营销人",
  description:
    "在营销与产品的交界处，用数据讲故事。中国传媒大学广告学在读，字节跳动飞书To B营销实习生。",
  keywords: "张紫茹, 市场营销, 产品运营, 数据分析, 字节跳动, 飞书, 用户洞察",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className={`${inter.className} bg-editorial-canvas text-editorial-body antialiased`}>
        <div className="fixed inset-0 -z-10 bg-editorial-canvas" aria-hidden />

        <SiteHeader />

        <div className="pt-[72px]">{children}</div>
      </body>
    </html>
  );
}
