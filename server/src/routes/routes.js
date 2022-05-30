const express = require('express');
const Router = express.Router();

const budgetController = require('../controllers/budgetController')
const {createRecord} = budgetController

Router.post('/create', (createRecord))


module.exports = Router;