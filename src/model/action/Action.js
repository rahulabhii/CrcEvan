const { sequelize } = require("../../domain/database/database");
const { DataTypes, INTEGER } = require('sequelize');


const Action = sequelize.define('action', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  pass: {
    type: DataTypes.BOOLEAN,
    allowNull: false

  },
  repair: {
    type: DataTypes.BOOLEAN,
    allowNull: false

  },
  replace: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false

  },
  partNumber: {
    type: DataTypes.STRING,
    allowNull: false

  }

},
  {
    freezeTableName: true,
    timestamps: false
  });

module.exports = Action;