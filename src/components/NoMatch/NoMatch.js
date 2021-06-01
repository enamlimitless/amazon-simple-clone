import React from 'react';
import './NoMatch.css';
const NoMatch = () => {
    return (
        <div className="nomatch">
            <div className="nomatch-style">
                <h1>Nothing Found</h1>
                <h2>4 &#11093; 4 Error</h2>
                <a href="/" className="nomatch-btn">Go To Home</a>
            </div>
        </div>
    );
};

export default NoMatch;