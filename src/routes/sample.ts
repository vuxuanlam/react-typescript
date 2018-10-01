import * as express from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';

let router = express.Router();

module.exports = function (app: express.Express) {
    app.use('/sample', router);
    router.get('/', function (req, res) {
        res.render('sample', {
            title: 'React Router Example'
        });
    })
};


