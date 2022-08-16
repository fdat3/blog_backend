const { Sequelize } = require("sequelize");
const ENVIRONMENT = process.env.NODE_ENV || "development";
const config = require('.')

const configENV = config(ENVIRONMENT);

const sequelize = new Sequelize(configENV.DB_NAME, configENV.DB_USER_NAME, configENV.DB_PASSWORD, {
    host: configENV.DB_HOST,
    // password: configENV.DB_PASSWORD,
    dialect: 'postgresql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: false
});

const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

setTimeout(() => connect(), 1)

module.exports = { Sequelize, sequelize, connect };
