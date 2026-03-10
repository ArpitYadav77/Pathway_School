import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { schemaTypes } from "./schemaTypes"

export default defineConfig({
basePath: "/studio",
projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
title: "Pathway School CMS",
plugins: [structureTool()],
schema: {
types: schemaTypes
}
})
