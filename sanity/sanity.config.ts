import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { schemaTypes } from "./schemaTypes"

export default defineConfig({
  basePath: "/studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "lesn71k7",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  title: "Pathway School CMS",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
})
