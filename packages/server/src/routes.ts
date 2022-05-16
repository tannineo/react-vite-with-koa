import Router from '@koa/router'

import { world } from './controllers/hello'

const router = new Router({
  prefix: '/api',
})

router.get('/hello', world)

export default router
