import { defineField, defineType } from "sanity";

export const caseStudyType = defineType({
  name: "caseStudy",
  title: "作品集案例",
  type: "document",
  fields: [
    defineField({
      name: "order",
      title: "排序（数字越小越靠前）",
      type: "number",
      initialValue: 0,
      validation: (Rule) => Rule.required().integer(),
    }),
    defineField({
      name: "slug",
      title: "链接标识（英文，唯一）",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "标题",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "分类 / 公司",
      type: "string",
    }),
    defineField({
      name: "date",
      title: "日期（展示用）",
      type: "string",
      description: "例如 2025.09",
    }),
    defineField({
      name: "image",
      title: "封面图",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "简介",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "details",
      title: "亮点列表",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  orderings: [
    {
      title: "排序数字",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", media: "image", subtitle: "category" },
    prepare({ title, media, subtitle }) {
      return { title: title || "未命名", media, subtitle };
    },
  },
});
