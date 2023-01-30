const { sequelize } = require("../../domain/database/database");
const { DataTypes, INTEGER } = require('sequelize');


const Estimation = sequelize.define('estimation', {
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
    parts: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    labour: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cost: {
        type: DataTypes.INTEGER,
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

module.exports = Estimation;