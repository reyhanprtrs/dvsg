import { Request, Response, NextFunction } from 'express'
import { verify_token } from '../helpers/JWT'
const { User } = require('../models')

export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    console.log(req.socket.remoteAddress, 'DARI AUTH <<<<<')
    const { access_token }: any = req.headers
    if (!access_token) next({ name: 'ErrorAccessToken' })
    else {
      const decoded: any = verify_token(access_token)
      req.signed_in_user = decoded
      if (!req.signed_in_user.user_agent) req.signed_in_user.user_agent = req.headers['user-agent']
      const checker = await User.findOne({ where: { id: decoded?.id } })
      if (!checker) next({ name: 'ErrorAuthenticate' })
      else next()
    }
  } catch (error) {
    next(error)
  }
}