'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TODO extends Model {
    
    static associate(models) {
      TODO.belongsTo(models.User, {
        foreignKey: 'userId'
      });
      TODO.belongsTo(models.Group, {
        foreignKey: 'groupId'
      });
    }
  }
  TODO.init({
    userId: DataTypes.INTEGER,
    taskTitle: DataTypes.STRING,
    groupId: DataTypes.INTEGER,
    groupTitle: DataTypes.STRING,
    taskDescription: DataTypes.STRING,
    subtasks: DataTypes.JSON,
    isCompleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'TODO',
  });
  return TODO;
};