const { sequelize } = require("../../domain/database/database");
const { DataTypes, INTEGER } = require('sequelize');


const VisualHandsOnCondition = sequelize.define('visualandhandsoncondition', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  damage: {
    type: DataTypes.BOOLEAN,


  },
  missing: {
    type: DataTypes.BOOLEAN,


  },
  leaking: {
    type: DataTypes.BOOLEAN,


  },
  bent: {
    type: DataTypes.BOOLEAN,


  },
  defects: {
    type: DataTypes.BOOLEAN,


  },
  modified: {
    type: DataTypes.BOOLEAN,


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

module.exports = VisualHandsOnCondition;