import { Router } from 'express'
import { moviesController } from '../controllers/moviesController.js'

export const moviesRouter = Router()

moviesRouter.get('/lists/:username', (req, res) =>
  moviesController.getLists(req, res)
)
