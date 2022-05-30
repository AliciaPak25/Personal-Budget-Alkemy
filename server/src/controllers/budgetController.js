const { pool } = require('../config/database');

const budgetController = {

    createRecord: (req, res)=> {
        const {concept, amount, dateOfRecord, typeOfRecord, category} = req.body

        pool.query('INSERT INTO records (concept, amount, dateOfRecord, typeOfRecord, category) VALUES (?, ?, ?, ?, ?)', [concept, amount, dateOfRecord, typeOfRecord, category],
        (error, result) => {
            if (error) {
                console.log(error);
            } else {
                res.send("Values Inserted")
            }
        }
        )
    }
};
module.exports = budgetController