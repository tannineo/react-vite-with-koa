import Koa from 'koa'
import * as path from 'path'
import StaticServe from 'koa-static'
import Mount from 'koa-mount'

import world from './helpers/hello'
import router from './routes'

const PORT = 3000

const staticServer = new Koa()

staticServer.use(StaticServe(path.join(__dirname, '../public')))

const app = new Koa()

app.use(Mount('/', staticServer))

app.use(router.routes()).use(router.allowedMethods())

app.listen(PORT)

console.log(`${world()} Server is running on: http://localhost:${PORT}`)
