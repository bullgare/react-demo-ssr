import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';

import Routes from './client/Routes';
import { API_URL_PROXY } from './client/actions/types';
import renderer from './helpers/renderer';
import createStore, { API_URL } from './helpers/create_store';

const app = express();

app.use(API_URL_PROXY, proxy(API_URL, {
    proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = 'localhost:3000';
        return opts;
    }
}));
app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = createStore(req.get('cookie'));

    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        if (route.loadData) {
            return route.loadData(store);
        }
        return null;
    }).map(promise => {
        if (promise) {
            return new Promise((resolve, reject) => {
                promise.then(resolve).catch(resolve);
            });
        }
    });

    Promise.all(promises).then(() => {
        const context = {};
        const content = renderer(req.path, store, context);

        if (context.notFound) {
            res.status(404);
        }

        res.send(content);
    });
});

app.listen(3000, () => {
    console.log('Listening on port 3000')
});