import { Request, Response, NextFunction } from 'express'

export default (err: any, req: Request, res: Response, next: NextFunction) => {
  const error_object = (code: Number, message: any) => {
    return res.status(Number(code)).json({
      name: err.name,
      message: message
    })
  }

  switch (err.name) {
    case "SequelizeValidationError":
      error_object(400, err.errors.map((e: any) => { return e.message }))
      break;
    case "SequelizeUniqueConstraintError":
      error_object(400, err.errors.map((e: any) => { return e.message }))
      break;
    case "InvalidPassOrEmail":
      error_object(401, 'Wrong email / password')
      break;
    case "ErrorAuthenticate":
      error_object(401, 'You need to login first')
      break;
    case "SequelizeForeignKeyConstraintError":
      error_object(400, 'Invalid constraint error')
      break;
    case "ErrorAccessToken":
      error_object(403, 'Jwt needed')
      break;
    default:
      res.status(500).json({
        name: 'InternalServerError',
        message: 'Internal server error'
      })
      break;
  }
}