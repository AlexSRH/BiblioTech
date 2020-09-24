import { getCore } from './core'

async function start() {
  const core = await getCore()
  await core.start()
}

start()
