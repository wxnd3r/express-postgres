const {Client} = require('pg')

async function connection(){
    const client = new Client({
        host: 'localhost',
        port: 5432,
        user: 'azure',
        password: 'azure',
        database: 'mydb'
    })
    await client.connect()
    return client
}


module.exports = connection