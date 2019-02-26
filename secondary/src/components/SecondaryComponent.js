import React, { Component } from 'react';

class SecondaryComponent extends Component {
    render() {
        return (
            <div>
                <h6>Howdy, I'm the SecondaryComponent and I loaded via <code>Injector.js</code>!</h6>
            </div>
        );
    }
}

export default SecondaryComponent;
