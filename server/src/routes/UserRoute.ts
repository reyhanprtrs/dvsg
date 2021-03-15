import User from '../controllers/User'
import BaseRoutes from './RouteInterface'

class UserRoute extends BaseRoutes {
  public routes(): void {
    this.route.get('/:id', User.getUserById)
    this.route.post('/register', User.register)
    this.route.post('/login', User.login)
    this.route.post('/googlelogin', User.googleLogin)
  }
}

export default new UserRoute().route