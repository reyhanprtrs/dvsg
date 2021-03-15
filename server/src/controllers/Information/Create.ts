import { Request, Response, NextFunction } from 'express'
const { Information } = require('../../models')

export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { shorten_url, original_url, total_clicks, total_unique_clicks } = req.body
    await Information.create({
      shorten_url,
      original_url,
      total_clicks,
      total_unique_clicks
    })
    res.status(201).json({ message: 'Information created' })
  } catch (error) {
    next(error)
  }
}