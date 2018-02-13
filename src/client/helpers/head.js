import React from 'react';
import { Helmet } from 'react-helmet';

export function head(extra = '') {
    const title = `SSR App. ${extra}`;
    return (
        <Helmet>
            <title>{title}</title>
            <meta property="og:title" content={title} />
        </Helmet>
    );
}