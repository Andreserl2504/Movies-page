import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '../consts/userConsts.js'

export const createToken = async (value) => {
  return new Promise((res, rej) => {
    jwt.sign(
      { userID: value },
      SECRET_KEY,
      { expiresIn: '1d' },
      (err, token) => {
        if (err) rej(new Error('Token Error'))
        res(token)
      }
    )
  })
}

export const verifyToken = async (token) => {
  return new Promise((res, rej) => {
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) rej(new Error('Token verify error'))
      res(decoded)
    })
  })
}
