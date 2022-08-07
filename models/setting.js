const { Sequelize, sequelize } = require("../config/databases");

const Setting = sequelize.define("tbl_setting", {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
    },
    banner_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
    },
    theme_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
    },
});

module.exports = Setting;
