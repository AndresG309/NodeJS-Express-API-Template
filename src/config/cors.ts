import type { CorsOptions } from 'cors'

export const corsOptions: CorsOptions = {
  // Allow requests from every origin. Customize this for your application.
  origin: '*',

  // For a restricted list of origins, replace the line above with:
  // origin: ['https://your-frontend.example.com', 'https://your-other-origin.example.com'],
}
