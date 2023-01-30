
const { sequelize } = require('../../domain/database/database');
const { DataTypes } = require('sequelize');

const InspectionSubArea = sequelize.define('subarea', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  areaName: {
    type: DataTypes.STRING,
    allowNull: false

  },
  parentId: {
    type: DataTypes.INTEGER,
    allowNull: false

  }

}, {
  freezeTableName: true,
  timestamps: true
});


module.exports = InspectionSubArea;
