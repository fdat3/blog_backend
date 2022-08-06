'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.addColumn('tbl_employees', 'avatar', {
        type: Sequelize.STRING,
    })
    await queryInterface.addColumn('tbl_employees', 'dob', {
        type: Sequelize.DATE,
    })
    return await queryInterface.addColumn('tbl_employees', 'deletedAt', {
        type: Sequelize.DATE,
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('tbl_employees', 'avatar')
    await queryInterface.removeColumn('tbl_employees', 'dob')
    return await queryInterface.removeColumn('tbl_employees', 'deletedAt')
  }
};
