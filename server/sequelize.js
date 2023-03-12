const path = require('path');

module.exports = {
    "config": path.resolve('./sequelize/config', 'config.json'),
    "models-path": path.resolve('./sequelize/models'),
    "seeders-path": path.resolve('./sequelize/seeders'),
    "migrations-path": path.resolve('./sequelize/migrations')
};
