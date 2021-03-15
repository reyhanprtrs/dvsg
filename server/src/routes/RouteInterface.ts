import { Router } from 'express'

interface IRoute {
  routes(): void
}

export default abstract class BaseRoutes implements IRoute {
  public route: Router

  constructor () {
    this.route = Router()
    this.routes()
  }

  abstract routes(): void
}