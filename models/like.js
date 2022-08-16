const { Sequelize, sequelize } = require("../config/databases");

const Like = sequelize.define("tbl_like", {
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
    comment_id: {
        type: Sequelize.UUID,
    }
});

module.exports = Like;
