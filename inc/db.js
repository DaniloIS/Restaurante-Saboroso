const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    database: 'saboroso',
    password: 'Cle@r2022',
    multipleStatements: true
});

module.exports = connection;
