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
    const records = await pool.query('SELECT * FROM records')
    res.send(records)
});

module.exports = Router;