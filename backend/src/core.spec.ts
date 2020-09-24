import { getCore } from './core'

function mockApp() {
  async function start() {
    console.log('[mock] App starting...')
  }

  return { start }
}

describe('Core', () => {
  it('should start', async () => {
    const app = mockApp()
    const database = mockApp()

    const core = getCore({ app, database })

    expect(async () => {
      await core.start()
    }).not.toThrowError()
  })
})
