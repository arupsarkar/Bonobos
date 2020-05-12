const Pool = require('pg').Pool;
const pg = require('pg');
const dotenv = require('dotenv');
dotenv.config();
// const pool = new Pool({
//     user: 'qvkjbbfwzcfvut',
//     password: 'a19763df01d1eb026c84e6d780a5b34f23d5dbecce238f53e90b41f8e0f331d8',
//     host: 'ec2-18-210-51-239.compute-1.amazonaws.com',
//     port: 5432,
//     database: 'dfgm3fjipert9v',
//     ssl: true,
// })

let client = new pg.Client({
    user: "qvkjbbfwzcfvut",
    password: "a19763df01d1eb026c84e6d780a5b34f23d5dbecce238f53e90b41f8e0f331d8",
    database: "dfgm3fjipert9v",
    port: 5432,
    host: "ec2-18-210-51-239.compute-1.amazonaws.com",
});

client.connect();

module.exports = client;
