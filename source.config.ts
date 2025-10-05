import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
} from "fumadocs-mdx/config"
import { z } from "zod"

export default defineConfig({
  lastModifiedTime: "git",
  mdxOptions: {
    providerImportSource: "@/mdx-components",
  },
})

export const { docs, meta } = defineDocs({
  dir: "content/changelog",
  docs: {
    schema: frontmatterSchema.extend({
      date: z.string(),
      tags: z.array(z.string()).optional(),
      version: z.string().optional(),
    }),
  },
})

export const { docs: announcementDocs, meta: announcementMeta } = defineDocs({
  dir: "content/announcements",
  docs: {
    schema: frontmatterSchema.extend({
      date: z.string(),
      tags: z.array(z.string()).optional(),
      priority: z.enum(["high", "medium", "low"]).optional(),
    }),
  },
})
