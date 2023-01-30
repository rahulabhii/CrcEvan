const { sequelize } = require("../../domain/database/database");
const { DataTypes, INTEGER } = require('sequelize');


const EmailSent = sequelize.define('emailsent', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  from: {
    type: DataTypes.STRING,
    allowNull: false
  },
  to: {
    type: DataTypes.STRING,
    allowNull: false

  },
  url: {
    type: DataTypes.STRING,
    allowNull: false

  },
  date: {
    type: DataTypes.STRING,
    allowNull: false

  },
  serialNumber: {
    type: DataTypes.STRING,
    allowNull: false

  },
  userEmail: {
    type: DataTypes.STRING,
    allowNull: false

  }

},
  {
    freezeTableName: true,
    timestamps: true
  });

module.exports = EmailSent;