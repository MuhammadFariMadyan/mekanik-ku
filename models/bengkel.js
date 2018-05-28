'use strict';
module.exports = (sequelize, DataTypes) => {
  var Bengkel = sequelize.define('Bengkel', {
    UserId: DataTypes.INTEGER,
    ownerName: DataTypes.STRING,
    bengkelName: DataTypes.STRING,
    email: DataTypes.STRING,
    numberPhone: DataTypes.STRING,
    address: DataTypes.STRING,
    status: DataTypes.STRING,
    lat: DataTypes. DOUBLE,
    long: DataTypes.DOUBLE,
  }, {});
  Bengkel.associate = function(models) {
    // associations can be defined here
    Bengkel.hasMany(models.Mekanik);
    Bengkel.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  // Bengkel.afterDestroy((mekanik)=>{
  //   sequelize.models.Mekanik.all({
  //     where: {
  //       Mekanik.idBengkel
  //     }
  //   })
  //   forEach((mekanik) => {

  //   })
  // });

  // Supplier.afterDestroy((item) => {
  //   sequelize.models.SupplierItem.all({
  //     where: {
  //       SupplierId: item.id
  //     }
  //   }).then((supplierItems) => {
  //     supplierItems.forEach((item) => {
  //       item.destroy();
  //     })
  //   }).catch((err) => {
  //     console.log(err);
  //   })
  // });

  return Bengkel;
};