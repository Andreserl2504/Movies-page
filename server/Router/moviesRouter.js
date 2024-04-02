import { Router } from 'express'
import { moviesController } from '../controllers/moviesController.js'

export const moviesRouter = Router()

moviesRouter.get('/lists/:username', (req, res) =>
  moviesController.getLists(req, res)
)
moviesRouter.get('/list/isInList/:list/:userID/:imdbID', (req, res) =>
  moviesController.isInList(req, res)
)
moviesRouter.post('/list/addToList/:list', (req, res) =>
  moviesController.addToList(req, res)
)
moviesRouter.delete('/list/removeToList/:list', (req, res) =>
  moviesController.deleteToList(req, res)
)
