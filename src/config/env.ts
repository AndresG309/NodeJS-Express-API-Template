import { z } from 'zod'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.resolve(process.cwd(), 'src/.env.example'),
})

const envSchema = z.object({
  SERVER_PORT: z.coerce.number().int().positive(),
  NODE_ENV: z.literal(["development", "production"])
})

export const env = envSchema.parse(process.env)
