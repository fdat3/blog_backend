const { Sequelize, sequelize } = require("../config/databases");

const Setting = sequelize.define("tbl_setting", {
    id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
    },
    banner_id: {
        type: Sequelize.UUID,
    },
    theme_id: {
        type: Sequelize.UUID,
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
},{
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

module.exports = Setting;
