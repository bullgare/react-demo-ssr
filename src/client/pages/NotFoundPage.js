import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
    staticContext.notFound = true;

    return (
        <div>
            Page not found.
        </div>
    );
};

export default {
    component: NotFoundPage
}