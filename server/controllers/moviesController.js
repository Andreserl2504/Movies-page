import { moviesModel } from '../models/moviesModel.js'

export class moviesController {
  static async getLists(req, res) {
    try {
      const username = req.params.username
      if (username) {
        const { queryResult } = await moviesModel.getFavorite({
          username: username
        })
        const movies = Array.from(
          { length: queryResult.length },
          (_, i) => queryResult[i].imdbID
        )
        res.status(200).json({ favoritesID: movies })
      }
    } catch (e) {
      return res.status(400).send(e.message)
    }
  }
}
