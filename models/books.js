const {Model} = require('sequelize');
const {Datatype} = require('sequelize');
const connection = require('../db/connection')

  class books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  books.init({
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    price: DataTypes.INTEGER,
    category: DataTypes.STRING
  }, {
    sequelize:connection,
    modelName: 'books',
    tableName:'books'
  });


