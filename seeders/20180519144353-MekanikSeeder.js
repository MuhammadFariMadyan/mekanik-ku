'use strict';
const faker = require('faker');
module.exports = {
  up: (queryInterface, Sequelize) => {
    let mekaniks = [];
    for (var i = 0; i < 10; i++) {
      let fullName = faker.name.firstName();
      let numberPhone = faker.phone.phoneNumber();
      let keterangan = faker.lorem.words();
      mekaniks.push({
        BengkelId: 1,
        fullName: fullName,
        numberPhone: numberPhone,
        keterangan: keterangan,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    return queryInterface.bulkInsert('Mekaniks', mekaniks, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Mekaniks', null, {});
  }
};
