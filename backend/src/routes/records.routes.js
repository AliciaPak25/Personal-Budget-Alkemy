const Router = require('express').Router();

const mysqlConnection = require('../config/database');

Router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM records', (error, rows, fields) => {
        if(!error) {
            res.json(rows);
        } else {
            console.log(error);
        }
    })
})

Router.get('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM records WHERE id = ?', [id], (error, rows, fields) => {
        if(!error) {
            res.json(rows);
        } else {
            console.log(error);
        }
    })
});

/* Router.post('/add', (req, res) => {
    mysqlConnection.query('SELECT * FROM records WHERE id = ?', [id], (error, rows, fields) => {
        if(!error) {
            res.json(rows);
        } else {
            console.log(error);
        }
    })
}) */

module.exports = Router;