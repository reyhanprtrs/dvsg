import { Request, Response, NextFunction } from 'express'
const { Information, User } = require('../../models')

export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const find_all_info = await Information.findAll({ include: [ User ] })
    res.status(200).json(find_all_info)
  } catch (error) {
    next(error)
  }
}