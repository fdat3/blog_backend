'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tbl_like extends Model {
        static associate(models) {
        }
    }
    tbl_like.init({
    }, {
        sequelize,
        modelName: 'tbl_like',
    });
    return tbl_like;
};