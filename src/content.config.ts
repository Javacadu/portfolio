// Defines the "blog" content collection and the required frontmatter fields for each post
// Every .md or .mdx file inside src/content/blog/ becomes a blog post entry

import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  // Load all markdown/mdx files from the blog directory
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  // Schema enforces what frontmatter each post must (or can) have
  schema: z.object({
    title: z.string(),       // Post title — required, must be text
    date: z.string(),        // Publish date — required, must be text
    description: z.string(), // Short excerpt shown on cards — required, must be text
  }),
});

// Export collections so Astro knows about them
export const collections = { blog };
