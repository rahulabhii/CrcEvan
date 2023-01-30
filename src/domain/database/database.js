const { Sequelize } = require('sequelize');
const dbConfig = require('../db/dbConfig');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        dialect: dbConfig.dialect,
        host: dbConfig.HOST,
        // logging: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
);

const connectToDb = async () => {
    try {
        await sequelize.authenticate();
        console.log('Successfully connected to database');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    sequelize,
    connectToDb
};
