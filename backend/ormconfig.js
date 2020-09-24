require('dotenv/config')

module.exports = [
  {
    name: 'default',
    type: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.PORT || 5432,
    database: 'bibliotech',
    migrations: ['src/database/migrations/*.ts'],
    entities: ['src/app/models/*.ts'],
    cli: {
     migrationsDir: 'src/database/migrations'
    }
  },
  {
    name: 'test',
    type: 'sqlite',
    database: './src/database/tests.sqlite',
    migrations: ['src/database/migrations/*.ts'],
    entities: ['src/app/models/*.ts'],
    cli: {
     migrationsDir: 'src/database/migrations'
    }
  }
]
