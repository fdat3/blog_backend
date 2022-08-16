'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_comment extends Model {
    static associate(models) {
    }
  }
  tbl_comment.init({
    content: DataTypes.TEXT,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tbl_comment',
  });
  return tbl_comment;
};