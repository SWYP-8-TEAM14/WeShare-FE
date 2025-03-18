import { z } from "zod";

export const serverEnvSchema = z.object({
  KAKAO_CLIENT_ID: z.string(),
  KAKAO_REDIRECT_URI: z.string(),
});

export type ServerEnv = z.infer<typeof serverEnvSchema>;

export const serverEnv: ServerEnv = serverEnvSchema.parse({
  KAKAO_CLIENT_ID: process.env.KAKAO_CLIENT_ID,
  KAKAO_REDIRECT_URI: process.env.KAKAO_REDIRECT_URI,
});
