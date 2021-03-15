if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
import app from '../app'
import { createServer } from 'http'

class Server {
  public server

  constructor () {
    this.server = createServer(app)
  }
}
const server = new Server().server
const port = process.env.PORT

server.listen(port, () => console.log('RUNNING BOSSS'))