import express, { type Express } from 'express'
import cors from 'cors'

// Import Other Config
import { corsOptions } from './config/cors.js'
import { errorHandler } from './middlewares/index.js'

// Import Routes
import { exampleRouter } from './routes/index.js'

// App Configuration
const app: Express = express()
app.disable('x-powered-by')
app.use(cors(corsOptions))
app.use(express.json())

// API Routing
app.use('/example', exampleRouter)

// Error Handling - Set always after the last API Routing
app.use(errorHandler)

export default app
