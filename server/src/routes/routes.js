const express = require('express');
const Router = express.Router();

const pool = require('../config/database');

Router.post('/create', async (req, res) => {
    const { concept, amount, dateOfRecord, typeOfRecord, category } = req.body;
    const newRecord ={
        concept,
        amount,
        dateOfRecord,
        typeOfRecord, 
        category
    }
    await pool.query('INSERT INTO records set ?', [newRecord]);
    res.send('received');
})

Router.get('/records', async (req, res) => {
    await pool.query('SELECT * FROM records'), (error, result) => {
        if (error) {
            console.log(error);
        } else {
            res.send(result);
        }
    }
    
});

module.exports = Router;