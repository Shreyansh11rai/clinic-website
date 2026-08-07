import { envConfig } from "@/config/envConfig";

type MockResolver<T> = () => T | Promise<T>;

export async function httpGet<T>(path: string, mockResolver: MockResolver<T>): Promise<T> {
  if (!envConfig.USE_API) {
    return mockResolver();
  }

  if (!envConfig.API_BASE_URL) {
    throw new Error("NEXT_PUBLIC_API_BASE_URL is required when NEXT_PUBLIC_USE_API is enabled.");
  }

  const response = await fetch(new URL(path, envConfig.API_BASE_URL), {
    headers: { Accept: "application/json" },
    cache: "force-cache",
  });

  if (!response.ok) {
    throw new Error(`Request failed for ${path}: ${response.status}`);
  }

  return response.json() as Promise<T>;
}
