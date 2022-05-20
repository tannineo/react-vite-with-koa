import { Context } from 'koa'

import worldHelper from '#src/helpers/hello'

const world = async (ctx: Context) => {
  ctx.body = worldHelper()
}

export { world }
