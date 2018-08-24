import * as express from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';

import SimpleApp from '../components/SimpleApp';

let router = express.Router();

module.exports = function (app: express.Express) {
    app.use('/simple', router);
    router.get('/', function (req, res) {
        res.send("hello server");
    })
};


