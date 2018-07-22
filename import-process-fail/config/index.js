console.log(`NODE_ENV in ./config/index.js: ${process.env.NODE_ENV}`)

const ENVIRONMENT = process.env.NODE_ENV || 'development'
process.env.NODE_ENV = ENVIRONMENT

const DATABASE_URL = process.env.DATABASE_URL

export {
  ENVIRONMENT,
  DATABASE_URL,
}
