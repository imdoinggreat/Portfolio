import type { Metadata } from "next";
import { SkillsPageClient } from "./skills-page-client";

export const metadata: Metadata = {
  title: "技能栈 | 张紫茹",
  description: "数据分析、创意设计与内容工具技能概览",
};

export default function SkillsPage() {
  return <SkillsPageClient />;
}
