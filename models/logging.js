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
        method: {
            type: Sequelize.ENUM,
            values: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
        },
        session_id: {
            type: Sequelize.STRING,
        },
        status_code: {
            type: Sequelize.INTEGER,
        },
        original_url: {
            type: Sequelize.STRING,
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
        },
        timestamps: true,
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
            checked: {
                where: {
                    is_checked: true
                },
                order: [['updatedAt', 'DESC']],

            },
            unchecked: {
                where: {
                    is_checked: false
                },
                order: [['updatedAt', 'DESC']],
            }
        },
    }
);

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User);

module.exports = Logging;
