require('dotenv').config();
const ENV = process.env

module.exports = {
    DB_USER_NAME: ENV.DB_DEVELOP_USERNAME,
    DB_PASSWORD: ENV.DB_DEVELOP_PASSWORD,
    DB_HOST: ENV.DB_DEVELOP_HOST,
    DB_PORT: ENV.DB_DEVELOP_PORT,
    DB_NAME: ENV.DB_DEVELOP_NAME,
}