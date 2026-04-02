import type { StructureResolver } from "sanity/structure";

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .id("desk-root")
    .title("网站内容")
    .items([
      S.listItem()
        .id("siteSettings")
        .title("站点设置")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings"),
        ),
      S.divider(),
      S.documentTypeListItem("caseStudy")
        .id("caseStudy")
        .title("作品集案例"),
      S.documentTypeListItem("photographySlide")
        .id("photographySlide")
        .title("摄影页竖滑图片"),
    ]);
