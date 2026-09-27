import { Router } from 'express'
import { exampleController } from '../controllers/example.controller.js'

const router: Router = Router()

router.get('/', exampleController.get)
router.get('/:id', exampleController.getById)
router.post('/', exampleController.create)
router.patch('/:id', exampleController.update)
router.delete('/:id', exampleController.delete)

export default router
