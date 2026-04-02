"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Camera, FolderKanban, Home, Mail } from "lucide-react";
import { LimelightNav, type NavItem } from "@/components/ui/limelight-nav";

const navItems: NavItem[] = [
  { id: "home", icon: <Home />, label: "首页", href: "/" },
  { id: "cases", icon: <FolderKanban />, label: "作品集", href: "/cases" },
  { id: "photo", icon: <Camera />, label: "相机", href: "/photography" },
  {
    id: "contact",
    icon: <Mail />,
    label: "联系",
    href: "/#contact",
  },
];

function activeIndexFromPath(pathname: string): number {
  if (pathname === "/") return 0;
  if (pathname.startsWith("/cases")) return 1;
  if (pathname.startsWith("/photography")) return 2;
  return 0;
}

export function SiteHeader() {
  const pathname = usePathname();
  const activeIndex = activeIndexFromPath(pathname);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass-morphism border-b border-honeydew-200/30">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="text-xl font-bold hover:text-honeydew-500 transition-colors shrink-0"
        >
          张紫茹
        </Link>
        <div className="flex justify-end min-w-0">
          <LimelightNav
            items={navItems}
            activeIndex={activeIndex}
            className="bg-white/80 dark:bg-card/80 max-w-[min(100vw-8rem,28rem)] overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            limelightClassName="bg-honeydew-400"
          />
        </div>
      </div>
    </header>
  );
}
