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
let db_url = 'postgres://qvkjbbfwzcfvut:a19763df01d1eb026c84e6d780a5b34f23d5dbecce238f53e90b41f8e0f331d8@ec2-18-210-51-239.compute-1.amazonaws.com:5432/dfgm3fjipert9v';
//also stream data
pg.connect(db_url, function(err, client) {
    if (err) {
        console.log("Error connecting to database: " + err);
    } else {
        client.on('notification', function(msg) {
            console.log("DATABASE NOTIFY: ", msg.payload);
            // Move some data...
        });
        var query = client.query("LISTEN channel1");
    }
});

module.exports = client;
