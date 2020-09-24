const { compilerOptions } = require('./tsconfig.json')
const { pathsToModuleNameMapper } = require('ts-jest/utils')

module.exports = {
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*',
    '!src/index.ts',
    '!src/database/migrations/*',
    '!**/I*.ts'
  ],
  coverageProvider: 'v8',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' }),
  preset: 'ts-jest',
  testEnvironment: 'node'
}
