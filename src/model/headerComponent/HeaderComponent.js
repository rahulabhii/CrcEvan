const { sequelize } = require("../../domain/database/database");
const { DataTypes, INTEGER } = require('sequelize');
const Parts = require("./Parts");
const SetupFor = require("./SetupFor");
const TotalEstimation = require("./TotalEstimation");
const VisualCondition = require("./VisualCondition");


const HeaderComponent = sequelize.define('headercomponent', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    serialNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    partNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    unitModel: {
        type: DataTypes.STRING,
        allowNull: false
    },
    AssessmentDate: {
        type: DataTypes.STRING,
        allowNull: false
    },
    AssessmentBy: {
        type: DataTypes.STRING,
        allowNull: false
    },
    workOrder: {
        type: DataTypes.STRING,
        allowNull: false

    },
    ReturnedDate: {
        type: DataTypes.STRING,
        allowNull: false

    },
    signature: {
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
        timestamps: false
    });



HeaderComponent.hasMany(Parts);
Parts.belongsTo(HeaderComponent);

Parts.hasMany(VisualCondition);
VisualCondition.belongsTo(Parts);

Parts.hasMany(SetupFor);
SetupFor.belongsTo(Parts);

Parts.hasMany(TotalEstimation);
TotalEstimation.belongsTo(Parts);


module.exports = HeaderComponent;