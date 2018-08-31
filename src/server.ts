import * as express from 'express';
import * as session from 'express-session';

import { ConfigType } from './config/config';
import { dirname } from 'path';
const path = require('path');
const expressValidator = require('express-validator');
const glob = require('glob');

class AppServer {
    public app: any;
    public config: ConfigType;

    constructor() {
    }

    public initalize(app: any, config: ConfigType) {
        this.app = app;
        this.config = config;
        app.set('views', path.join(__dirname, '../src/views'));
        console.log(__dirname);
        app.set('view engine', 'ejs');
        app.use(expressValidator());
        app.use(session({
            secret: config.session.secret,
            resave: config.session.resave,
            saveUninitialized: config.session.saveUninitialized,
            cookie: { maxAge: config.session.cookie.maxAge }
        }));
        const cacheTime = 10000;
        app.use(express.static(path.join(config.root, 'public'), {
            maxAge: cacheTime,
            lastModified: true,
            redirect: true
        }
        ));
        let routes = glob.sync(__dirname + '/routes/*.+(js|ts|jsx|tsx)');
        routes.forEach(function (routes: any) {
            require(routes)(app);
        });
        app.use((req: any, res: any, next: any) => {
            let err: any = new Error('Not Found');
            err.status = 404;
            next(err);
        });
        app.use((err: any, req: any, res: any, next: any) => {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: {}
            });
        });
    }

    public start() {
        this.app.listen(this.config.port, () => {
            console.log('Express server listening on port ' + this.config.port);
        })
    }
}

export default new AppServer();

