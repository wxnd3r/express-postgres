const {Pool} = require('pg')

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'azure',
    password: 'azure',
    database: 'mydb'
})



module.exports = pool