import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname),
      // "server-only" yalnız React Server ortamında boş modüldür; testlerde aynı davranış sağlanır.
      "server-only": path.resolve(import.meta.dirname, "tests/stubs/server-only.ts"),
    },
  },
  test: {
    include: ["tests/**/*.test.ts"],
    environment: "node",
    testTimeout: 30_000,
    env: {
      // Yalnız test için rastgele olmayan sabit değer; gerçek bir secret değildir.
      AUTH_SECRET: "test-only-auth-secret-0123456789abcdef",
    },
  },
});
