const express = require('express');
const pool = require('./pool');

const router = express.Router();

router.get('/', (req, resp) => {

    // Query the database for all rows from 'projects' table
    pool.query('SELECT * FROM tags')
    .then(result => {
        resp.send(result.rows);
    })
    .catch(error => {
        console.log('error with getting tags from database', error);
        resp.sendStatus(500);
    });

}); 


module.exports = router;