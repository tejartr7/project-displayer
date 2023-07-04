import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from "./sanity/schemas"


const config = defineConfig({
  projectId: "ygox4tsi",
  dataset: "production",
  title: "Rtr - Sanity Studio",
  apiVersion: "2023-03-09",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas }
})

export default config