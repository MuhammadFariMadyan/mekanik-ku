'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Bengkels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER
      },
      ownerName: {
        type: Sequelize.STRING
      },
      bengkelName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      numberPhone: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      // status: {
      //   type: Sequelize.ENUM('active', 'inactive'),
      //   defaultValue: 'inactive'
      // },
      status: {
        type: Sequelize.STRING
      },
      lat:{
        allowNull: true,
        type: Sequelize. DOUBLE
      },
      long:{
        allowNull: true,
        type: Sequelize.DOUBLE
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Bengkels');
  }
};