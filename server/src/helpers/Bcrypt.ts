import bcrypt from 'bcryptjs'

export const generate_password = (password: string) => {
  const salt = bcrypt.genSaltSync(Number(process.env.SALT));
  return bcrypt.hashSync(password, salt);
}

export const compare_password = (password: string, hash: string) => {
  return bcrypt.compareSync(password, hash); 
}