'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bengkels', [{
        UserId: 1,
        ownerName: 'Edi Susanto',
        bengkelName: 'Kartika Repair',
        email: 'kartika@gmail.com',
        numberPhone: '081290901010',
        address: 'Jalan Raden Intan No. 190 Pahoman',
        status: 'inactive',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bengkels', null, {});
  }
};
