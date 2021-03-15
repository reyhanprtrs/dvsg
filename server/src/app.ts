import express, { Application } from 'express'
import morgan from 'morgan'
import compression from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import route from './routes'
import error_handler from './middlewares/ErrorHandler'

declare global {
  namespace Express {
    interface Request {
      signed_in_user: any
    }
  }
}

class App {
  public app: Application

  constructor () {
    this.app = express()
    this.plugins()
    this.routes()
    this.log_error()
  }

  protected plugins(): void {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(morgan('dev'))
    this.app.use(compression())
    this.app.use(helmet())
  }

  protected routes(): void {
    this.app.use(route)
  }

  protected log_error(): void {
    this.app.use(error_handler)
  }
}

export default new App().app
