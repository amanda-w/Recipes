'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.recipe.belongsTo(models.user);
    }
  }
  recipe.init({
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING(1000),
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'recipe',
  });
  return recipe;
};