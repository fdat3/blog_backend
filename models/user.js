const { Sequelize, sequelize } = require("../config/databases");

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
        },
        avatar: {
            type: Sequelize.STRING,
        },
        follower_count: {
            type: Sequelize.VIRTUAL(Sequelize.INTEGER),
            get() {
                return this.getDataValue("follower_count") || 0;
            },
        },
        active: {
            type: Sequelize.BOOLEAN,
            defaultValue: true,
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
        // deletedAt: "deleteAt",
        underscored: false,
        freezeTableName: true,
        paranoid: true,
        defaultScope: {
            where: {
                active: true,
            },
            attributes: { exclude: ["password"] },
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

module.exports = User;
