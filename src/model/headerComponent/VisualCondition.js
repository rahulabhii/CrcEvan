const { sequelize } = require("../../domain/database/database");
const { DataTypes, INTEGER } = require('sequelize');


const VisualCondition = sequelize.define('visualcondition', {
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
    isSelected: {
        type: DataTypes.BOOLEAN,
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

module.exports = VisualCondition;