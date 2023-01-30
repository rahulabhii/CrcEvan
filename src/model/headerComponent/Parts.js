const { sequelize } = require("../../domain/database/database");
const { DataTypes, INTEGER } = require('sequelize');


const Parts = sequelize.define('partnumber', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    partNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    headerText: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sideText: {
        type: DataTypes.STRING,
        allowNull: false
    },
    action: {
        type: DataTypes.STRING,
        allowNull: false

    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false

    },
    headercomponentId: {
        type: DataTypes.INTEGER,
        allowNull: false

    }

},
    {
        freezeTableName: true,
        timestamps: false
    });

module.exports = Parts;