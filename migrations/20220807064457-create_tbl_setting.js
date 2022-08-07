"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
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
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        return await queryInterface.dropTable("tbl_setting");
    },
};
