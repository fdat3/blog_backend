'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('tbl_logging', 'session_id', {
        type: Sequelize.STRING,
    })
    await queryInterface.addColumn('tbl_logging', 'method', {
      type: Sequelize.ENUM,
      values: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    })
    await queryInterface.addColumn('tbl_logging', 'status_code', {
        type: Sequelize.INTEGER,
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('tbl_logging', 'session_id')
    await queryInterface.removeColumn('tbl_logging', 'method')
    await queryInterface.removeColumn('tbl_logging', 'status_code')
  }
};
