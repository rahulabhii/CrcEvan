const { sequelize } = require('../../domain/database/database');
const { DataTypes } = require('sequelize');

const AssetInformation = sequelize.define('assetinformation', {
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
    description: {
        type: DataTypes.STRING
    },
    plantCode: {
        type: DataTypes.STRING
    },
    assessmentDate: {
        type: DataTypes.STRING
    },
    workOrder: {
        type: DataTypes.STRING
    },
    dateReturned: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true,
    timestamps: true
});

module.exports = AssetInformation;