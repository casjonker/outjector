import React from 'react';
import { inject } from 'lib/Injector';

const App = (props) => {
    const { Secondary } = props;
    return (
        <div>
            <p>I'm an <code>App</code> component from the <code>Primary</code> bundle.</p>
            <p>I also have an injected component to render...</p>
            <Secondary />
        </div>
    );
};

export default inject(
    ['SecondaryComponent'],
    (SecondaryComponent) => ({
        Secondary: SecondaryComponent,
    }),
    () => 'App'
)(App);
