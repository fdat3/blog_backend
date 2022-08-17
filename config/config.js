require('dotenv').config()
const ENV = process.env

module.exports = {
    "development": {
        "username": ENV.DB_DEVELOP_USERNAME,
        "password": ENV.DB_DEVELOP_PASSWORD,
        "database": ENV.DB_DEVELOP_NAME,
        "host": ENV.DB_DEVELOP_HOST,
        "dialect": "postgres",
        "dialectOptions": {
            bigNumberStrings: true,
        },
        "operatorsAliases": false,
        "pool": {
            "max": 100,
            "min": 0,
            "acquire": 30000,
            "idle": 10000
        },
        "logging": false
    },
    "test": {
        "username": ENV.DB_DEVELOP_USERNAME,
        "password": ENV.DB_DEVELOP_PASSWORD,
        "database": ENV.DB_DEVELOP_NAME,
        "host": ENV.DB_DEVELOP_HOST,
        "dialect": "postgres",
        "operatorsAliases": false,
        "pool": {
            "max": 100,
            "min": 0,
            "acquire": 30000,
            "idle": 10000
        },
        "logging": false
    },
    "production": {
        "username": ENV.DB_PRODUCTION_USERNAME,
        "password": ENV.DB_PRODUCTION_PASSWORD,
        "database": ENV.DB_PRODUCTION_NAME,
        "host": ENV.DB_PRODUCTION_HOST,
        "dialect": "postgres",
        "dialectOptions": {
            bigNumberStrings: true,
        },
        "port": 5432,
        "pool": {
            "max": 100,
            "min": 0,
            "acquire": 30000,
            "idle": 10000
        },
        "logging": false
    },
}
