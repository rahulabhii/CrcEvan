const { sequelize } = require('../../domain/database/database');
const { DataTypes } = require('sequelize');
const Signature = sequelize.define('signature', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    signature: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userEmail: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: true
});
module.exports = Signature;