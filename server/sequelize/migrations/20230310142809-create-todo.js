'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TODOs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      taskTitle: {
        type: Sequelize.STRING
      },
      groupId: {
        type: Sequelize.INTEGER
      },
      groupTitle: {
        type: Sequelize.STRING
      },
      taskDescription: {
        type: Sequelize.STRING
      },
      subtasks: {
        type: Sequelize.JSON
      },
      isCompleted: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TODOs');
  }
};