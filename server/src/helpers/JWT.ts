import jwt from 'jsonwebtoken'

export const generate_token = (payload: Object) => {
  return jwt.sign(payload, String(process.env.SECRET_KEY))
}

export const verify_token: any = (token: string) => {
  return jwt.verify(token, String(process.env.SECRET_KEY))
}