import type { Request, Response, NextFunction } from 'express'
import { CustomError, ExampleError } from '../errors/index.js'

export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  // Check if the error is one of the Custom Error Types created to return its values
  // If not, return 500 Internal Server Error
  const isCustomError = err instanceof CustomError
  const statusCode = isCustomError ? err.statusCode : 500
  const message = isCustomError ? err.message : 'Internal server error'

  // Apply custom behaviour based on what error was caught
  if (err instanceof ExampleError) {
    console.log('ExampleError Caught on errorHandler')
  }

  // Send the response
  return res.status(statusCode).json({
    success: false,
    error: {
      status: statusCode,
      message,
    },
  })
}
