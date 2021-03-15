import { Request, Response, NextFunction } from 'express'
import { generate_password }  from '../../helpers/Bcrypt'
const { User } = require('../../models')

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body
    const hashPwd = generate_password(password)
    const create_user = await User.create({ email, password: hashPwd })
    res.status(201).json(create_user.email)
  } catch (error) {
    next(error)
  }
}