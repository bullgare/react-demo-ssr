import React from 'react';

import HomePage from './pages/HomePage';
import UserListPage, { loadData } from './pages/UserListPage';

export default [
    {
        ...HomePage,
        path: '/',
        exact: true
    },
    {
        ...UserListPage,
        path: '/users'
    }
];