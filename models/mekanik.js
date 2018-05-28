'use strict';
module.exports = (sequelize, DataTypes) => {
  var Mekanik = sequelize.define('Mekanik', {
    BengkelId: DataTypes.INTEGER,
    fullName: DataTypes.STRING,
    numberPhone: DataTypes.STRING,
    keterangan: DataTypes.STRING,
  }, {});

  Mekanik.associate = function(models) {
    // Using additional options like CASCADE etc for demonstration
    // Can also simply do Task.belongsTo(models.User);
    Mekanik.belongsTo(models.Bengkel, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  }

  return Mekanik;
};