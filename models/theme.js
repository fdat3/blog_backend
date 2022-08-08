const { Sequelize, sequelize } = require("../config/databases");

const Theme = sequelize.define("tbl_theme", {
    id: {
        primaryKey: true,
        type: Sequelize.ENUM("MAIN" | "ORDER"),
        defaultValue: Sequelize.UUIDV4,
    },
    tilte: {
        type: Sequelize.STRING,
    },
    settings: {
        type: Sequelize.JSONB,
    },

    associate(models) {
        Theme.belongsTo(models.setting, { foreignKey: "id" });
    },
});

module.exports = Theme;
