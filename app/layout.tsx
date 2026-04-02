import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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

        <nav className="fixed top-0 left-0 right-0 z-40 glass-morphism border-b border-honeydew-200/30">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link
              href="/"
              className="text-xl font-bold hover:text-honeydew-500 transition-colors"
            >
              张紫茹
            </Link>
            <div className="flex gap-6 text-sm">
              <Link
                href="/"
                className="hover:text-honeydew-500 transition-colors"
              >
                首页
              </Link>
              <Link
                href="/cases"
                className="hover:text-honeydew-500 transition-colors"
              >
                作品集
              </Link>
              <Link
                href="/photography"
                className="hover:text-honeydew-500 transition-colors"
              >
                相机
              </Link>
              <a
                href="mailto:3459613530@qq.com"
                className="hover:text-honeydew-500 transition-colors"
              >
                联系
              </a>
            </div>
          </div>
        </nav>

        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
