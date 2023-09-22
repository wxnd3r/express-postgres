const {Sequelize} = require('sequelize')

const {config} = require('../config/config')
const setupModels = require('../db/models/index')

const USER = encodeURI(config.dbUser)
const PASSWORD = encodeURI(config.dbPassword)
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize(URI,{
    dialect: 'postgres',
    logging: function(info) {
        console.log(info)
    }
})

setupModels(sequelize)

sequelize.sync()
module.exports = {sequelize}