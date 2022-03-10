const express = require('express');
const router = express.Router();
const url = require('url')
const client = require('../db');

router.get('/insert', async (req, res, next) => {

    try{

        const item = req.query.item
        console.log('---> item name ', item)
        //console.log(req)
        const result = await insertCart(item)
        res.json({key: result})
    }catch(error) {
        console.error(error.stack)
    }

})

const insertCart = async (product) => {

    try{
        const sql = `insert into salesforce.cart__c (product__c) values ($1)`
        console.log(sql)
        await client.query(sql, [product])
            .then(result => {
                console.log(result)
                return true
            })
            .catch(error => {
                console.error(error.stack)
            })
    }catch(error) {
        console.error(error.stack)
    }
}

module.exports = router;
