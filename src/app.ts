import * as express from 'express';
let path = require('path');
import { ConfigType } from './config/config';
import AppServer from './server';

let app: express.Express;
let config: ConfigType;

export function init() {
    app = express();
    config = {
        root: path.normalize(__dirname),
        port: process.env.PORT,
        session: {
            secret: 'abcdenhe',
            resave: false,
            saveUninitialized: false,
            cookie: {
                maxAge: 360000
            }
        }
    };
    AppServer.initalize(app, config);

    process.on('uncaughtException', (err: any) => {
        console.log(err);
    });

    return app;
}
export function start() {
    AppServer.start();
}
