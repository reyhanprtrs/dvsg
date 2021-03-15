'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Information extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Information.hasMany(models.User)
    }
  };
  Information.init({
    shorten_url: DataTypes.STRING,
    original_url: DataTypes.STRING,
    total_clicks: DataTypes.INTEGER,
    total_unique_clicks: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Information',
  });
  return Information;
};