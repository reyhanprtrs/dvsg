import { Request, Response, NextFunction } from 'express'
const { User } = require('../../models')

export default async (req: Request, res: Response, next: NextFunction) => {
  // try {
    const { id } = req.params
    const find_user = await User.findOne({ where: { id } })
    res.status(200).json(find_user)
  // } catch (error) {
  //   next(error)
  // }
}