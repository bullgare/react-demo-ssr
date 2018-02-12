import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';

import Routes from '../client/Routes';

export default (url, store, context) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={url} context={context}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    );

    return `
        <html>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
            </head>
            <body>
                <div id="app">${content}</div>
                <script>
                    window.INITIAL_STATE = ${serialize(store.getState())};
                </script>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
};