const { sequelize } = require('../../domain/database/database');
const { DataTypes } = require('sequelize');

const InspectedBy = sequelize.define('inspectedby', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userEmail: {
        type: DataTypes.STRING
    },
    serialNumber: {
        type: DataTypes.STRING
    },
    assessmentDate: {
        type: DataTypes.STRING
    },
    assessedBy: {
        type: DataTypes.STRING
    },
    dateOf: {
        type: DataTypes.STRING
    },
    workOrder: {
        type: DataTypes.STRING
    },
    dateReturned: {
        type: DataTypes.STRING
    },
}, {
    freezeTableName: true,
    timestamps: true
});

module.exports = InspectedBy;