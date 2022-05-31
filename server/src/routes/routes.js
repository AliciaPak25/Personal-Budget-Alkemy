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
/*     res.redirect('http://localhost:3000/myfinances'); */
})

Router.get('/records', async (req, res) => {
    const records = await pool.query('SELECT * FROM records')
    res.send(records)
});

Router.put('/update', (res, req) => {
    const id = req.body.id
    const concept = req.body.concept
    pool.query('UPDATE SET records concept = ? WHERE id = ?',
    [concept, id],
    (error, result) => {
        if (error) {
            console.log(error);
        } else {
            res.send(result)
        }
    })
})

/* Router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM records WHERE ID = ?', [id])
    res.redirect('http://localhost:3000/myfinances');
}); */

Router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM records WHERE id = ?', id, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            res.send(result)
        }
    })  
})

module.exports = Router;