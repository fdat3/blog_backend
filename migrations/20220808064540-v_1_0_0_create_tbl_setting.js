"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        return queryInterface.createTable("tbl_setting", {
            id: {
                type: Sequelize.UUID,
                primaryKey: true,
            },
            banner_id: {
                type: Sequelize.UUID,
            },
            theme_id: {
                type: Sequelize.UUID,
            },
            createdAt: {
                type: Sequelize.DATE,
            },
            updatedAt: {
                type: Sequelize.DATE,
            },
            deletedAt: {
                type: Sequelize.DATE,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        return await queryInterface.dropTable("tbl_setting");
    },
};
