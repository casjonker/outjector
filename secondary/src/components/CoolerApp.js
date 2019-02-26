import React from 'react';

const CoolerApp = (App) => () => {
    return (
        <div>
            <p>I'm a <code>CoolerApp</code> component from the <code>Secondary</code> bundle. I wrapped this component:</p>
            <App />
        </div>
    );
};

export default CoolerApp;
