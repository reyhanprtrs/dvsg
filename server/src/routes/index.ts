import BaseRoutes from './RouteInterface'
import info from './InformationRoute'
import user from './UserRoute'

class MainRouter extends BaseRoutes {
  public routes(): void {
    this.route.use('/info', info)
    this.route.use('/', user)
  }
}

export default new MainRouter().route