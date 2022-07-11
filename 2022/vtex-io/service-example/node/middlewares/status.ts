export async function status(ctx: Context, next: () => Promise<any>) {
  const {
    state: { code },
    clients: { catalog },
  } = ctx


  const data  = await catalog.getSkuById(code.toString())
  ctx.body = data
  ctx.set('Cache-Control', 'no-cache no-store')

  await next()
}
