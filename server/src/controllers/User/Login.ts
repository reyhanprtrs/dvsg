import { Request, Response, NextFunction } from 'express'
import { generate_token } from '../../helpers/JWT'
import { compare_password } from '../../helpers/Bcrypt'
const { User } = require('../../models')

export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password } = req.body
    const find_user = await User.findOne({ where: { email } })
    if (!find_user) next({ name: 'InvalidPassOrEmail' })
    else {
      const check_password = compare_password(password, find_user.password)
      if (!check_password) next({ name: 'InvalidPassOrEmail' })
      else {
        const access_token = generate_token({ id: find_user.id, email: find_user.email })
        res.status(200).json(access_token)
      }
    }
  } catch (error) {
    next(error)
  }
}