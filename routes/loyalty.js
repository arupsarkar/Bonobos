const express = require('express');
const router = express.Router();
const client = require('../db');

/* GET users listing. */
router.get('/', async (req, res, next) => {
    try{
        let query = 'select points__c from salesforce.bnb_loyalty__c';

        await client
            .query(query)
            .then(res => console.log(res.rows[0].points__c))
            .catch(err => console.error('Error executing query', err.stack))
        res.json(res.rows);
    }catch(err) {
        console.error(err.message);
    }
});

router.post('', async (req, res, next) => {

    try{

    }catch(err){
        console.error(err.message);
    }
})

module.exports = router;
