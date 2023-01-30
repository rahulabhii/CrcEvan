


const { sequelize } = require('../../domain/database/database');
const { DataTypes } = require('sequelize');

const InspectionSubComponent = sequelize.define('parts', {
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
  subareaId: {
    type: DataTypes.INTEGER,
    allowNull: false

  }

},
  {
    freezeTableName: true,
    timestamps: true
  });

module.exports = InspectionSubComponent;