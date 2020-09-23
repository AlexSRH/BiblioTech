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
    cli: {
      migrationsDir: 'src/database/migrations'
    }
  }
]
