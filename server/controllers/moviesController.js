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
      res.status(400).send(e.message)
    }
  }
  static async isInList(req, res) {
    try {
      const { userID, imdbID, list } = req.params
      if (userID && imdbID && list === 'favorite') {
        if (
          await moviesModel.isInListFavorite({
            userID: userID,
            imdbID: imdbID
          })
        ) {
          res.json({ isInList: true })
        } else {
          res.json({ isInList: false })
        }
      }
    } catch (e) {
      res.status(400).send(e.message)
    }
  }
  static async addToList(req, res) {
    try {
      const { userID, imdbID } = req.body
      const { list } = req.params

      if (userID && imdbID && list === 'favorite') {
        if (
          await moviesModel.lenListFavorite({
            userID: userID
          })
        ) {
          await moviesModel.addToFavoriteList({
            userID: userID,
            imdbID: imdbID
          })

          res.json({
            isInList: true,
            message: 'Added to favorite list successfully'
          })
        } else {
          res.json({
            isInList: false,
            message:
              'You have reached the limit of movies in your favorite list'
          })
        }
      }
    } catch (e) {
      res.status(400).send(e.message)
    }
  }
  static async deleteToList(req, res) {
    try {
      const { userID, imdbID } = req.body
      const { list } = req.params
      if (userID && imdbID && list === 'favorite') {
        if (
          moviesModel.deleteToFavoriteList({ userID: userID, imdbID: imdbID })
        ) {
          res.json({ isInList: false })
        } else {
          throw new Error("Something's wrong")
        }
      }
    } catch (e) {
      res.status(400).send(e.message)
    }
  }
}
