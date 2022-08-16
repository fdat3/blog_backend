const { Sequelize, sequelize } = require("../config/databases");

const Comment = sequelize.define("tbl_comment", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  blog_id: {
    type: Sequelize.UUID,
  },
  user_id: {
    type: Sequelize.UUID,
  },
  employee_id: {
    type: Sequelize.UUID,
  },
  content: {
    type: Sequelize.TEXT,
  },
  image: {
    type: Sequelize.STRING,
  }
});

module.exports = Comment;
