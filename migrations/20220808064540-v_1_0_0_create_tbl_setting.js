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
                defaultValue: Sequelize.UUIDV4,
            },
            banner_id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
            },
            theme_id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
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
