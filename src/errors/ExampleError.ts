import { CustomError } from './CustomError.js'

export class ExampleError extends CustomError {
  readonly statusCode = 500

  constructor(message: string) {
    super(message)
  }
}
