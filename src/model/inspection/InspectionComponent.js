
const { sequelize } = require('../../domain/database/database');
const { DataTypes, INTEGER } = require('sequelize');


const InspectionComponent = sequelize.define('component', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false

  },
  partNumber: {
    type: DataTypes.STRING,
    allowNull: false

  },
  parentId: {
    type: DataTypes.INTEGER,
    allowNull: false

  }

},
  {
    freezeTableName: true,
    timestamps: false
  });

module.exports = InspectionComponent;