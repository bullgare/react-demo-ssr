import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import reducers from '../client/reducers';

export const API_URL = 'http://react-ssr-api.herokuapp.com';

export default (originalCookie = '') => {
    const axiosInstance = axios.create({
        baseURL: API_URL,
        headers: { cookie: originalCookie }
    });

    const store = createStore(
        reducers,
        {},
        applyMiddleware(thunk.withExtraArgument(axiosInstance))
    );

    return store;
}