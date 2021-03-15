import Information from '../controllers/Information'
import BaseRoutes from './RouteInterface'
import Auth from '../middlewares/Auth'

class InformationRoute extends BaseRoutes {
  public routes(): void {
    this.route.use(Auth)
    this.route.get('/', Information.getInfo)
  }
}

export default new InformationRoute().route