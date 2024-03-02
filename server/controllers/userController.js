import { UserModel } from '../models/userModel.js'
import { validInfoForm } from '../schemas/UserLogSingSchema.js'

export class UserController {
  static async logSingUserController(req, res) {
    try {
      const result = validInfoForm(req.body.userData)
      if (result.success) {
        if (req.body.params === 's') {
          const { queryResult, isDBError } = await UserModel.createUser({ data: result.data })
          if (!isDBError) {
            res.status(201).json(queryResult)
          }
          else {
            throw new Error(isDBError)
          }
        } else if (req.body.params === 'l') {
          const { queryResult, isDBError } = await UserModel.getUser({ data: result.data, password: result.data.password})
          if (!isDBError) {
            res.status(200).json(queryResult)
          }
          else {
            throw new Error(isDBError)
          }
        }
      } else {
        throw new Error('Validation error')
      }
    } catch (e) {
      res.status(400).send(e.message)
    }
  }
}
