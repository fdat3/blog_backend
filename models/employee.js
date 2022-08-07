const {Sequelize, sequelize} = require("../config/databases");

const Employee = sequelize.define("tbl_employees", {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
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
    active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
    },
    follower_count: {
        type: Sequelize.VIRTUAL(Sequelize.INTEGER),
        get() {
            return this.getDataValue("follower_count") || 0;
        },
    },
    role: {
        type: Sequelize.STRING,
        validate: {
            isIn: [["ADMIN", "SUPER_ADMIN"]],
        },
        defaultValue: "ADMIN",
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
}, {
    hooks: {},
    timestamps: true,
    underscored: true,
    freezeTableName: true,
    paranoid: true,
    defaultScope: {
        attributes: {exclude: ['password']},
    },
    scopes: {
        // deleted: {
        //     where: {deletedAt: {$ne: null}},
        //     paranoid: false,
        // },
    },
});

module.exports = Employee;
