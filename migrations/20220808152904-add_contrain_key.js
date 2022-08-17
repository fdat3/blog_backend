'use strict';

const { query } = require("express");

module.exports = {
  async up(queryInterface, Sequelize) {
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
      }, { transaction });


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

      await queryInterface.addConstraint('tbl_user', {
        fields: ['id'],
        type: 'foreign key',
        name: 'fk_tbl_user_tbl_blog_id',
        references: {
          table: 'tbl_blog',
          field: 'user_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })

      await queryInterface.addConstraint('tbl_user', {
        fields: ['id'],
        type: 'foreign key',
        name: 'fk_tbl_user_tbl_like_id',
        references: {
          table: 'tbl_like',
          field: 'user_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })

      await queryInterface.addConstraint('tbl_user', {
        fields: ['id'],
        type: 'foreign key',
        name: 'fk_tbl_user_tbl_comment_id',
        references: {
          table: 'tbl_comment',
          field: 'user_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })

      await queryInterface.addConstraint('tbl_employee', {
        fields: ['id'],
        type: 'foreign key',
        name: 'fk_tbl_employee_tbl_blog_id',
        references: {
          table: 'tbl_blog',
          field: 'employee_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })

      await queryInterface.addConstraint('tbl_employee', {
        fields: ['id'],
        type: 'foreign key',
        name: 'fk_tbl_employee_tbl_comment_id',
        references: {
          table: 'tbl_comment',
          field: 'employee_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })

      await queryInterface.addConstraint('tbl_employee', {
        fields: ['id'],
        type: 'foreign key',
        name: 'fk_tbl_employee_tbl_like_id',
        references: {
          table: 'tbl_like',
          field: 'employee_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })

      await queryInterface.addConstraint('tbl_blog', {
        fields: ['id'],
        type: 'foreign key',
        name: 'fk_tbl_blog_tbl_comment_id',
        references: {
          table: 'tbl_comment',
          field: 'blog_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })

      await queryInterface.addConstraint('tbl_comment', {
        fields: ['id'],
        type: 'foreign key',
        name: 'fk_tbl_comment_tbl_like_id',
        references: {
          table: 'tbl_comment',
          field: 'comment_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    })

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.removeConstraint('tbl_setting', 'fk_tbl_setting_tbl_banner_id', { transaction });
      await queryInterface.removeConstraint('tbl_setting', 'fk_tbl_setting_tbl_theme_id', { transaction });
      await queryInterface.removeConstraint('tbl_user', 'fk_tbl_user_tbl_blog_id', { transaction });
      await queryInterface.removeConstraint('tbl_user', 'fk_tbl_user_tbl_like_id', { transaction });
      await queryInterface.removeConstraint('tbl_user', 'fk_tbl_user_tbl_comment_id', { transaction });
    })
  }
};

