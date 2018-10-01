import * as express from 'express';
import * as React from 'react';

let router = express.Router();

module.exports = function (app: express.Express){
    app.use('/taskManager', router);
    router.get('/', function(req, res){
        res.render('taskManager', {
            title: 'Task Manager Example'
        });
    })
};