const { sequelize } = require("../../domain/database/database");
const { DataTypes, INTEGER } = require('sequelize');


const TotalEstimation = sequelize.define('totalestimation', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    partsEstimates: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    labourHours: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cost: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    partnumberId: {
        type: DataTypes.INTEGER,
        allowNull: false

    }
},
    {
        freezeTableName: true,
        timestamps: false
    });

module.exports = TotalEstimation;