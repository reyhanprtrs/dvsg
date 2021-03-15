'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // User.belongsTo(models.Information)
    }
  };
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    ip_address: DataTypes.STRING,
    user_agent: DataTypes.STRING,
    device: DataTypes.STRING,
    browser: DataTypes.STRING,
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};