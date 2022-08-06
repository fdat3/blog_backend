'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        await queryInterface.addColumn('tbl_employees', 'active', {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        })
        await queryInterface.addColumn('tbl_users', 'active', {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        })

    },
    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        await queryInterface.removeColumn('tbl_employees', 'active')
        await queryInterface.removeColumn('tbl_users', 'active')
    }
};
