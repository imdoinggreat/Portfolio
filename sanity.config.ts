'use client';
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";
import { dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";
import { deskStructure } from "./sanity/deskStructure";

const title = "作品集后台";

export default defineConfig({
  name: "default",
  title,
  projectId: projectId || "missingProjectId",
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool({ structure: deskStructure }),
    visionTool(),
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: "/api/draft-mode/enable",
        },
      },
    }),
  ],
  schema: { types: schemaTypes },
});
