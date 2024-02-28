import { UserModel } from '../models/userModel.js'
import { validInfoForm } from '../schemas/UserLogSingSchema.js'

export class UserController {
  static async logSingUserController(req, res) {
    try {
      const result = validInfoForm(req.body.userData)
      if (result.success) {
        if (req.body.params === 's') {
          const { queryResult } = UserModel.createUser({ data: result.data })

          res.json({ queryResult })
        } else if (req.body.params === 'l') {
          console.log('hi im login')
        }
        res.json(req.body)
      } else {
        res.json({ MessageError: 'Validation error' })
      }
    } catch (e) {
      res.json({ ErrorMessage: 'Server Error', error: e })
    }
  }
}
