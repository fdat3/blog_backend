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
        return queryInterface.createTable("tbl_theme", {
            id: {
                primaryKey: true,
                type: Sequelize.ENUM("MAIN" | "ORDER"),
                defaultValue: Sequelize.UUIDV4,
            },
            title: {
                type: Sequelize.STRING,
            },
            settings: {
                type: Sequelize.JSONB,
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
        return await queryInterface.dropTable("tbl_theme");
    },
};
