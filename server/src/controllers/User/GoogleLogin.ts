import { Request, Response, NextFunction } from 'express'
import { OAuth2Client } from 'google-auth-library'
import { generate_token } from '../../helpers/JWT'
const { User } = require('../../models')

export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT)
    const ticket = await client.verifyIdToken({
      idToken: req.body.google_token,
      audience: process.env.GOOGLE_CLIENT
    })
    const payload = ticket.getPayload()
    let user_account = await User.findOne({ where: { email: payload?.email } })
    if (!user_account) {
      user_account = await User.create({
        email: payload?.email,
        password: process.env.GOOGLE_PASSWORD
      })
    }
    const access_token = generate_token({ id: user_account.id, email: user_account.email })
    res.status(200).json({ email: user_account.email, access_token })
  } catch (error) {
    next(error)
  }
}