import type { Request, Response } from 'express'
import { ExampleError } from '../errors/index.js'

export class exampleController {
  static async get(req: Request, res: Response) {
    throw new ExampleError('ExampleError thrown from exampleController')
  }
  static async getById(req: Request, res: Response) {}
  static async create(req: Request, res: Response) {}
  static async update(req: Request, res: Response) {}
  static async delete(req: Request, res: Response) {}
}
