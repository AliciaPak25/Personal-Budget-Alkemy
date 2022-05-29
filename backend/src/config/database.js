const mysql = require('mysql2');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'Alicia',
    password: '!KBb37uG4CqY4ht$',
    database: 'budget',
})

mysqlConnection.connect(function (error) {
    if(error) {
        console.log(error);
        return;
    } else {
        console.log('Database is connected');
    }
});

module.exports = mysqlConnection;