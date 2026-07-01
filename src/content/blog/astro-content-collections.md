---
title: "Getting Started with Astro Content Collections"
date: 2026-07-05
description: "How to organize and query your content with Astro's built-in collections API."
---

Content Collections are the recommended way to manage groups of related content in Astro, like blog posts, product pages, or documentation.

## Setting Up a Collection

Create a `src/content.config.ts` file that defines your collections:

```ts
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
  }),
});

export const collections = { blog };
```

## Querying Content

Use `getCollection()` to fetch entries in any Astro component:

```astro
---
import { getCollection } from "astro:content";
const posts = await getCollection("blog");
---
```

Collections give you type safety, validation, and a clean API for working with your content.
