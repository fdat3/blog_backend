require('dotenv').config()
const ENV = process.env

module.exports = {
  "development": {
    "username": ENV.DB_DEVELOP_USERNAME,
    "password": ENV.DB_DEVELOP_PASSWORD,
    "database": ENV.DB_DEVELOP_NAME,
    "host": ENV.DB_DEVELOP_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": ENV.DB_DEVELOP_USERNAME,
    "password": ENV.DB_DEVELOP_PASSWORD,
    "database": ENV.DB_DEVELOP_NAME,
    "host": ENV.DB_DEVELOP_HOST,
    "dialect": "postgres"
  },
  "production": {
    "username": ENV.DB_DEVELOP_USERNAME,
    "password": ENV.DB_DEVELOP_PASSWORD,
    "database": ENV.DB_DEVELOP_NAME,
    "host": ENV.DB_DEVELOP_HOST,
    "dialect": "postgres"
  },
}
