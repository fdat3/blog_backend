'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('tbl_logging', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        level: {
            type: Sequelize.STRING,
        },
        is_checked: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },
        message: {
            type: Sequelize.STRING,
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
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('tbl_logging');
  }
};
