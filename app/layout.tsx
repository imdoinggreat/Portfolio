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
      <body className={inter.className}>
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-white" />
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(circle at center, #FFF991 0%, transparent 70%)",
              mixBlendMode: "multiply",
            }}
          />
        </div>

        <SiteHeader />

        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
