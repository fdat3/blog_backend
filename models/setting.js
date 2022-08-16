const { Sequelize, sequelize } = require("../config/databases");

const Setting = sequelize.define("tbl_setting", {
    id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
    },
    banner_id: {
        type: Sequelize.UUID,
        references: {
            model: "tbl_banner",
            key: "id",
        },
    },
    theme_id: {
        type: Sequelize.UUID,
        references: {
            model: "tbl_theme",
            key: "id",
        },
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
        banner: {
            where: {
                banner_id: {$ne: null},
                theme_id: {$eq: null}
            }
        },
        theme: {
            where: {
                banner_id: {$eq: null},
                theme_id: {$ne: null}
            }
        },
        deleted: {
            paranoid: false
        }
    },
});

module.exports = Setting;
