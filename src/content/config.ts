import { defineCollection, z } from "astro:content";
export const collections = {
  events: defineCollection({
    type: "data",
    schema: z.object({
      events: z.array(
        z.object({
          title: z.string(),
          date: z.string(),
        })
      ),
    }),
  }),
  posts: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      date: z.string(),
    }),
  }),
};
