const { sequelize } = require('../../domain/database/database');
const { DataTypes } = require('sequelize');

const LabourCost = sequelize.define('labourcost', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    cost: {
        type: DataTypes.INTEGER
    }
}, {
    freezeTableName: true,
    timestamps: true
});

module.exports = LabourCost;