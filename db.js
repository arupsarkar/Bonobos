const Pool = require('pg').Pool;
const { Client } = require('pg');

// const pool = new Pool({
//     user: 'qvkjbbfwzcfvut',
//     password: 'a19763df01d1eb026c84e6d780a5b34f23d5dbecce238f53e90b41f8e0f331d8',
//     host: 'ec2-18-210-51-239.compute-1.amazonaws.com',
//     port: 5432,
//     database: 'dfgm3fjipert9v',
//     ssl: true,
// })


const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true
});

client.connect();

module.exports = client;
