const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    password: '1234',
    host: 'localhost',
    port: '5432',
    database: 'jewelry',
});

client.connect()
    .then(() => {
        console.log("Connected to PostgreSQL database")
    })
    .catch(err => {
        console.error('Error connecting to PostgreSQL database', err)
    })









