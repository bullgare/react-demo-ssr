import React from 'react';

import { head } from "../helpers/head";

const NotFoundPage = ({ staticContext = {} }) => {
    staticContext.notFound = true;

    return (
        <div>
            {head('Page not found')}
            Page not found.
        </div>
    );
};

export default {
    component: NotFoundPage
}