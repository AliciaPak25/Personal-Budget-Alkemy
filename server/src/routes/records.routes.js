const express =  require('express');
const Router = express.Router();

const pool = require('../config/database');

/* Router.get('/add', (req, res) => {
    res.send('Form');
});

Router.post('/add', (req, res) => {
    res.send('received');
}) */

module.exports = Router;