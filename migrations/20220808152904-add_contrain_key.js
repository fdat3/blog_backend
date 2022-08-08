'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.sequelize.transaction(async (transaction) => {

      console.log('add banner tbl_banner_id foreign key')

      await queryInterface.addConstraint('tbl_setting', {
        fields: ['banner_id'],
        type: 'foreign key',
        name: 'fk_tbl_setting_tbl_banner_id',
        references: {
          table: 'tbl_banner',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }, {transaction});


      console.log('added banner theme_id foreign key')

      await queryInterface.addConstraint('tbl_setting', {
        fields: ['theme_id'],
        type: 'foreign key',
        name: 'fk_tbl_setting_tbl_theme_id',
        references: {
          table: 'tbl_theme',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })

    })

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.removeConstraint('tbl_setting', 'fk_tbl_setting_tbl_banner_id', {transaction});
      await queryInterface.removeConstraint('tbl_setting', 'fk_tbl_setting_tbl_theme_id', {transaction});
    })
  }
};

