export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

export function assertSanityEnv(): void {
  if (!projectId) {
    throw new Error(
      "缺少环境变量 NEXT_PUBLIC_SANITY_PROJECT_ID。请在 .env.local 中配置，或在 sanity.io 创建项目后填入。",
    );
  }
}
