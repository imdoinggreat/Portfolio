import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CASE_STUDY_SLUGS,
  getCaseStudyDetail,
} from "@/lib/case-studies-detail";

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  return CASE_STUDY_SLUGS.map((slug) => ({ slug }));
}

export default function CaseStudyPage({ params }: PageProps) {
  const { slug } = params;
  const study = getCaseStudyDetail(slug);
  if (!study) notFound();

  const blocks: { heading: string; body: string }[] = [
    { heading: "项目背景", body: study.background },
    { heading: "我的角色", body: study.myRole },
    { heading: "过程拆解", body: study.process },
    { heading: "结果", body: study.results },
    { heading: "复盘与优化", body: study.reflection },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-honeydew-50/40">
      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <Link
          href="/#projects"
          className="text-sm text-foreground/60 hover:text-honeydew-600 transition-colors"
        >
          ← 返回首页 · 攀登路线
        </Link>

        <header className="mt-10 mb-12">
          <p className="text-sm text-foreground/50 mb-2">
            {study.period} · {study.role}
          </p>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            {study.title}
          </h1>
          <p className="text-xl text-foreground/70">{study.subtitle}</p>
          <p className="mt-6 text-lg text-foreground/80 leading-relaxed border-l-4 border-honeydew-300 pl-4">
            {study.oneLiner}
          </p>
        </header>

        <div className="space-y-12">
          {blocks.map((b) => (
            <section key={b.heading}>
              <h2 className="text-xl font-bold mb-4 text-honeydew-600">
                {b.heading}
              </h2>
              <div className="text-foreground/80 leading-relaxed whitespace-pre-line">
                {b.body}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-16 pt-8 border-t border-honeydew-200/50 flex flex-wrap gap-4">
          <Link
            href="/cases"
            className="text-sm font-medium text-honeydew-600 hover:underline"
          >
            查看作品集图库
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium text-foreground/60 hover:text-honeydew-600"
          >
            联系我
          </Link>
        </footer>
      </article>
    </main>
  );
}
