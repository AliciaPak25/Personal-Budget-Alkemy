const express = require('express');
const Router = express.Router();

const pool = require('../config/database');

const budgetController = require('../controllers/budgetController')
const {createRecord, former} = budgetController

Router.get('/records', (req, res) => {
    res.send('Form');
});

Router.post('/create', (req, res) => {
    const { concept, amount, dateOfRecord, typeOfRecord, category } = req.body;
    const newRecord ={
        concept,
        amount,
        dateOfRecord,
        typeOfRecord, 
        category
    }
    console.log(newRecord);
    res.send('received');
})


module.exports = Router;