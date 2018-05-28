'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    lastLogin: DataTypes.DATE,
    status: {
      type: DataTypes.ENUM('active','inactive'),
      defaultValue:'active'
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasOne(models.Bengkel);
  };
  return User;
};