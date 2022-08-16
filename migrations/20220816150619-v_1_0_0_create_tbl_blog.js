'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable('tbl_blog', {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4
        },
        title: {
          type: Sequelize.TEXT,
        },
        sub_tilte: {
          type: Sequelize.TEXT,
        },
        slug: {
          type: Sequelize.STRING,
        },
        meta: {
          type: Sequelize.STRING,
        },
        body: {
          type: Sequelize.TEXT,
        },
        upVote: {
          type: Sequelize.INTEGER,
        },
        downVote: {
          type: Sequelize.INTEGER,
        },
        averageVote: {
          type: Sequelize.FLOAT,
        },
        readCount: {
          type: Sequelize.INTEGER,
        }
      }, { transaction });
    })

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.dropTable('tbl_blog');
    })
  }
};
