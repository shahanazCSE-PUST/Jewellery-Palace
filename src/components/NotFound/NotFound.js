import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import './NotFound.css';
const NotFound = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div className="text-center my-container for-font">
                <h1>404</h1>
                <h2>Not Found</h2>
                <p>The resource requested could not be found on this server!</p>
            </div>
        </div>
    );
};

export default NotFound;