const truthy = new Set(["1", "true", "yes", "on"]);

export const envConfig = {
  USE_API: truthy.has((process.env.NEXT_PUBLIC_USE_API ?? "").toLowerCase()),
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL ?? "",
};
