import { z } from "zod";

export const clientEnvSchema = z.object({
  API_URL: z.string(),
});

export type ClientEnv = z.infer<typeof clientEnvSchema>;

console.log("process.env", process.env);
export const clientEnv: ClientEnv = clientEnvSchema.parse({
  API_URL: process.env.NEXT_PUBLIC_API_URL,
});
