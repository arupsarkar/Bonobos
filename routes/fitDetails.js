
const express = require('express');
const router = express.Router();
const client = require('../db');

router.get('/', async (req, res, next) => {
    try{
        let sql = 'select Size__c, Type__c, Contact__c from salesforce.bnb_fit_info__c';

        await client
            .query(sql)
            .then(result => {
                res.json(result.rows);
            })
            .catch(err => console.error('Error executing query', err.stack))

    }catch(err) {
        console.error(err.message);
    }
});


module.exports = router;
