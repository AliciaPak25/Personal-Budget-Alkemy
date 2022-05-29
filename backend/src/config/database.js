const mysql = require('mysql2');
const { promisify } = require('util');

const { database } = require('../keys');

const pool = mysql.createPool(database);

pool.getConnection((error, connection) => {
    if(error) {
        if (error.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        if (error.code === 'ER_CON_COUNT_ERROR') {
            console.error('DATABASE HAS TOO MANY CONNECTIONS');
        }
        if (error.code === 'ECONNREFUSED') {
            console.error('DATABASE CONNECTION WAS REFUSED');
        }
    }

    if (connection) connection.release();
    console.log('Database is Connected');
    return;
});

//Promisify Pool Querys
pool.query = promisify(pool.query);

module.exports = pool;
