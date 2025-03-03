import { z } from "zod";

export const clientEnvSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string(),
});

export type ClientEnv = z.infer<typeof clientEnvSchema>;

export const clientEnv: ClientEnv = clientEnvSchema.parse(process.env);
