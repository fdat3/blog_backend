const { Sequelize, sequelize } = require("../config/databases");

const Theme = sequelize.define("tbl_theme", {
    id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
    },
    title: {
        type: Sequelize.STRING,
    },
    settings: {
        type: Sequelize.JSONB,
    },
    createdAt: {
        type: Sequelize.DATE,
    },
    updatedAt: {
        type: Sequelize.DATE,
    },
    deletedAt: {
        type: Sequelize.DATE,
    },
}, {
    hooks: {},
    timestamps: true,
    underscored: false,
    freezeTableName: true,
    paranoid: true,
    defaultScope: {},
    scopes: {
        deleted: {
            paranoid: false
        }
    },
});

module.exports = Theme;
