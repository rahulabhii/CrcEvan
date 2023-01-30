const { sequelize } = require('../../domain/database/database');
const { DataTypes } = require('sequelize');
const InspectionComponent = require('../inspection/InspectionComponent');
const InspectionSubArea = require('../inspection/InspectionSubArea');
const InspectionSubComponent = require('../inspection/InspectionSubComponent');

const Area = sequelize.define('area', {
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
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: true
});

Area.hasMany(InspectionComponent);
InspectionComponent.belongsTo(Area);

Area.hasMany(InspectionSubArea);
InspectionSubArea.belongsTo(Area);

InspectionSubComponent.belongsTo(InspectionSubArea);
InspectionSubArea.hasMany(InspectionSubComponent);




module.exports = Area;

