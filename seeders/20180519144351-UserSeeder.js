'use strict';
var bcrypt = require('bcrypt-nodejs');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        fullName: 'Fari',
        userName: 'MFM',
        email: 'fari.msenju@gmail.com',
        password:  bcrypt.hashSync('rahasia', bcrypt.genSaltSync(8), null),
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
