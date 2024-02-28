import { validInfoForm } from '../schemas/UserLogSingSchema.js'

export class userController {
  static async logSingUserController(req, res) {
    try {
      const result = validInfoForm(req.body)
      if (result.success) {
        console.log(result.data)
        res.json(req.body)
      } else {
        res.json({ MessageError: 'Validation error' })
      }
    } catch (e) {
      res.json({ ErrorMessage: 'Server Error', error: e })
    }
  }
}
