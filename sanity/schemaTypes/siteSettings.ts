import { defineArrayMember, defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "站点设置",
  type: "document",
  fields: [
    defineField({
      name: "heroName",
      title: "首页姓名",
      type: "string",
      initialValue: "张紫茹",
    }),
    defineField({
      name: "heroTagline",
      title: "首页副标题",
      type: "string",
      initialValue: "数据驱动 · 创意传播",
    }),
    defineField({
      name: "heroKeywordChips",
      title: "首页职业关键词（小标签，如 User Insight）",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "heroSlides",
      title: "首页环绕图（Circular）",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "heroSlide",
          fields: [
            defineField({
              name: "text",
              title: "环绕文字（如 USER INSIGHT）",
              type: "string",
            }),
            defineField({
              name: "image",
              title: "图片",
              type: "image",
              options: { hotspot: true },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "aboutTitle",
      title: "关于我 — 标题",
      type: "string",
      initialValue: "关于我",
    }),
    defineField({
      name: "aboutBody",
      title: "关于我 — 正文（支持换行）",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "highlights",
      title: "关于我 — 下方三张卡片",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "highlight",
          fields: [
            defineField({
              name: "icon",
              title: "图标（可用 Emoji）",
              type: "string",
            }),
            defineField({ name: "title", title: "标题", type: "string" }),
            defineField({
              name: "description",
              title: "描述",
              type: "text",
              rows: 2,
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "stats",
      title: "数据展示（四宫格）",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "stat",
          fields: [
            defineField({ name: "number", title: "数字", type: "string" }),
            defineField({ name: "label", title: "短说明", type: "string" }),
            defineField({
              name: "context",
              title: "语义补充（证据一句话）",
              type: "string",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "contactTitle",
      title: "联系区 — 标题",
      type: "string",
      initialValue: "联系我",
    }),
    defineField({
      name: "contactBlurb",
      title: "联系区 — 说明",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "contactEmail",
      title: "邮箱",
      type: "string",
    }),
    defineField({
      name: "contactPhone",
      title: "电话",
      type: "string",
    }),
    defineField({
      name: "resumeUrl",
      title: "简历下载链接",
      type: "url",
      description: "可填 PDF 直链或站内路径（需以 http 开头时可改用下方备注字段）",
    }),
    defineField({
      name: "resumePath",
      title: "简历站内路径（若不用完整 URL，可填此项，如 /resume.pdf）",
      type: "string",
    }),
    defineField({
      name: "resumeButtonLabel",
      title: "简历按钮文案",
      type: "string",
      initialValue: "下载简历（PDF）",
    }),
    defineField({
      name: "footerLine1",
      title: "页脚第一行",
      type: "string",
    }),
    defineField({
      name: "footerLine2",
      title: "页脚第二行",
      type: "string",
    }),
  ],
});
