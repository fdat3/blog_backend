const {Sequelize, sequelize} = require("../config/databases");

const Logging = sequelize.define(
    "tbl_logging",
    {
        // Model attributes are defined here
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        level: {
            type: Sequelize.STRING,
            validate: {
                isIn: [['debug', 'info', 'warn', 'error']],
            },
            defaultValue: 'info',
        },
        message: {
            type: Sequelize.STRING,
        },
        is_checked: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },
        rawJson: {
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
        }
    },
    {
        hooks: {
            // beforeCreate: (item) => {
            //     item.createdAt = new Date();
            //     item.updateAt = new Date();
            // },
            //
            // beforeUpdate: (item) => {
            //     item.updateAt = new Date();
            // },
        },
        timestamps: true,
        // updatedAt: 'updateAt',
        // deletedAt: 'deleteAt',
        underscored: false,
        freezeTableName: true,
        paranoid: true,
        defaultScope: {
            where: {
                active: true
            },
            order: [['updatedAt', 'DESC']],
            attributes: {exclude: []},
        },
        scopes: {
            // deleted: {
            //     where: {deletedAt: {$ne: null}},
            //     paranoid: false,
            // },
        },
    }
);

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User);

module.exports = Logging;
