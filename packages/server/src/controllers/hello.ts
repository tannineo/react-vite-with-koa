import { Context } from 'koa'

const world = async (ctx: Context) => {
  ctx.body = 'hello world'
}

export { world }
