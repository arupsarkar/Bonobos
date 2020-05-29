
const express = require('express');
const router = express.Router();
const client = require('../db');

router.get('/', async (req, res, next) => {
    try{
        let sql = 'select Size__c, Type__c, Id from salesforce.bnb_fit_info__c';

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

router.post('/update', async(req, res, next) => {
    try{
        const sql = 'update salesforce.bnb_fit_info__c SET size__c = $1, type__c = $2 WHERE id = $3';
        console.log(new Date(), ' body : ' + JSON.stringify(req.body));
        const {size__c} = req.body.size;
        const {type__c} = req.body.type;
        const {id} = req.body.id;
        console.log(new Date(), ' size : ' + size__c);
        console.log(new Date(), ' type : ' + type__c);
        console.log(new Date(), ' id : ' + id);
        await client
            .query(sql, [size__c, type__c, id ])
            .then(result => {
                console.log(new Date(), JSON.stringify(result));
                res.json({result: 'Record updated successfully.'});
            })
            .catch(err => console.error('Error executing query', err.stack));
    }catch(err) {
        console.error(err.message);
    }
})


module.exports = router;
