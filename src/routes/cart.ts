import * as express from 'express';
import * as React from 'react';

let router = express.Router();

module.exports = function (app: express.Express) {
    app.use('/cart', router);
    router.get('/', function (req, res) {
        res.render('cart', {
            title: 'Cart Example'
        });
    })
};