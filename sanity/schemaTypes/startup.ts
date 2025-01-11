import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const startup = defineType({
  name: "startup",
  title: "Startup",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),

    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),

    defineField({
      name: "author",
      type: "reference",
      to: [{ type: "author" }],
    }),

    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "category",
      type: "string",
      validation: (Rule) =>
        Rule.min(1).max(20).required().error("Category is required"),
    }),
    defineField({
      name: "image",
      type: "url",
      validation: (Rule) => Rule.required().error("Image is required"),
    }),
    defineField({
      name: "pitch",
      type: "markdown",  //npm i sanity-plugin-markdown
    }),
  ],
 
});
