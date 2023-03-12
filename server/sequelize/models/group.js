'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    
    static associate(models) {
      Group.hasMany(models.TODO, {
        foreignKey: 'groupId',
        as: 'todos'
      })
    }
  }
  Group.init({
    groupTitle: DataTypes.STRING,
    groupDescription: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Group',
  });
  return Group;
};