import { defineField, defineType } from "sanity";

export const photographySlideType = defineType({
  name: "photographySlide",
  title: "摄影页竖滑图片",
  type: "document",
  fields: [
    defineField({
      name: "order",
      title: "排序",
      type: "number",
      initialValue: 0,
      validation: (Rule) => Rule.required().integer(),
    }),
    defineField({
      name: "title",
      title: "标题",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "描述",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "alt",
      title: "图片替代文字（无障碍）",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "图片",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
  ],
  orderings: [
    {
      title: "排序",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", media: "image" },
    prepare({ title, media }) {
      return { title: title || "未命名", media };
    },
  },
});
