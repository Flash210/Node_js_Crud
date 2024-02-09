


const e = require('express');
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodecrud",
    port: 3307
});

db.connect((err, connection) => {

    if (err) {
        console.log('Error connecting to the database'+err);
        return;
    }
    console.log('Connected to the database');
});

module.exports = db; // will be extracted and used in other files to connect to the database
