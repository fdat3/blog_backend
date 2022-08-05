const { Sequelize, sequelize } = require("../config/databases");

const Employee = sequelize.define("tbl_employees", {
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
  role: {
    type: Sequelize.STRING,
    validate: {
      isIn: [["ADMIN", "SUPER_ADMIN"]],
    },
    defaultValue: "ADMIN",
  },
});
