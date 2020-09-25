import { getCore } from './core'

function mock() {
  async function start() {}

  return { start }
}

describe('Core', () => {
  it('should start', async () => {
    const appExpress = mock()
    const database = mock()

    const core = getCore({ appExpress, database })

    expect(async () => {
      await core.start()
    }).not.toThrowError()
  })
})
