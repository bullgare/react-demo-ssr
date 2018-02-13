import React from 'react';
import { head } from "../helpers/head";

const HomePage = () => {
    return (
        <div>
            {head()}
            <h3>Welcome!</h3>
            <p>It's server-side rendering happening here.</p>
        </div>
    );
};

export default {
    component: HomePage
};