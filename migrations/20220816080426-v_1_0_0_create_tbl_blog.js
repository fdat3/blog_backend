'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.sequelize.transaction(async (transaction) => {
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
          type: Sequelize.INT,
        },
        downVote: {
          type: Sequelize.INT,
        },
        averageVote: {
          type: Sequelize.float,
        },
        readCount: {
          type: Sequelize.INT,
        }
      })
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     return queryInterface.sequelize.transaction(async (transaction) => {
      // await queryInterface.removeConstraint('tbl_setting', 'banner_setting_key', {transaction});
      // await queryInterface.removeConstraint('tbl_setting', 'theme_setting_key', {transaction});
      await queryInterface.dropTable('tbl_blog', {transaction});
  })
  }
};
