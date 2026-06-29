import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        date: z.date(),
        featured: z.boolean().optional(),
        tags: z.array(z.string()).optional(),
        category: z.string().optional(),    
        audio: z.string().optional(),
    }),
});

export const collections = { posts };