const {Sequelize, sequelize} = require("../config/databases");

const User = sequelize.define(
    "tbl_users",
    {
        // Model attributes are defined here
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        dob: {
            type: Sequelize.DATE,
            allowNull: true,
        },
        avatar: {
            type: Sequelize.STRING,
        },
        folower_count: {
            type: Sequelize.VITURAL(Sequelize.INTEGER),

        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        deletedAt: {
            type: Sequelize.DATE,
        }
    },
    {
        hooks: {
            beforeCreate: (item) => {
                item.createdAt = new Date();
                item.updateAt = new Date();
            },

            beforeUpdate: (item) => {
                item.updateAt = new Date();
            },
        },
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true,
        defaultScope: {
            attributes: {exclude: ['password']},
        },
        scopes: {
            deleted: {
                where: {deletedAt: {$ne: null}},
                paranoid: false,
            },
        },
    }
);

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User);

module.exports = User;
