import { defineCollection, z } from "astro:content"

export const collections = {
  work: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      start: z.coerce.date(),
      end: z.coerce.date(),
      order: z.coerce.number(),
      description: z.string(),
    }),
  }),
}