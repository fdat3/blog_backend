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
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
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
  }
);

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User);

module.exports = User;
