import express, { type Express } from 'express'
import cors from 'cors'

// Import Routes
import { exampleRouter } from './routes/index.js'

// App Configuration
const app: Express = express()
app.disable('x-powered-by')
app.use(cors())
app.use(express.json())

// API Routing
app.use('/example', exampleRouter)

export default app
