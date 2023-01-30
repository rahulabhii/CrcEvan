module.exports = {
    HOST: 'sbd-dev.cr0afajiwgnv.us-west-2.rds.amazonaws.com',
    USER: 'admin',
    PASSWORD: '3159yokGcJM9YFT',
    DB: 'asset_inspection',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}

