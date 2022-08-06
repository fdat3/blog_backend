const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("postgres://postgres:root@localhost:5432/test", {
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

module.exports = {Sequelize, sequelize, connect};
