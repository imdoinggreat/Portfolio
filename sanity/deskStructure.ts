import type { StructureResolver } from "sanity/structure";

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title("网站内容")
    .items([
      S.listItem()
        .title("站点设置")
        .id("siteSettings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings"),
        ),
      S.divider(),
      S.documentTypeListItem("caseStudy").title("作品集案例"),
      S.documentTypeListItem("photographySlide").title("摄影页竖滑图片"),
    ]);
