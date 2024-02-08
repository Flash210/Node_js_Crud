


const mysql = require('mysql');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodecrud"
});

db.getConnection((err, connection) => {

    console.log('Connected to the database');
});

module.exports = db; // will be extracted and used in other files to connect to the database
