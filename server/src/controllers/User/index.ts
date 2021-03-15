import GetById from './GetById'
import Register from './Register'
import Login from './Login'
import GoogleLogin from './GoogleLogin'

const User = {
  getUserById: GetById,
  register: Register,
  login: Login,
  googleLogin: GoogleLogin
}

export default User