import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { inject } from 'lib/Injector';
import { INCREMENT_COUNTER } from '../store/AppActionTypes';

const App = (props) => {
    const { Secondary, count, incrementCount } = props;

    return (
        <div>
            <p>I'm an <code>App</code> component from the <code>Primary</code> bundle.</p>
            <p>I also have an injected component to render...</p>
            <Secondary />

            <p>Here's a counter value from the store: { count }</p>
            <p><button onClick={incrementCount}>Increment</button></p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        ...state.AppReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCount() {
            dispatch({ type: INCREMENT_COUNTER });
        }
    };
};

export default compose(
    inject(
        ['SecondaryComponent'],
        (SecondaryComponent) => ({
            Secondary: SecondaryComponent,
        }),
        () => 'App'
    ),
    connect(mapStateToProps, mapDispatchToProps)
)(App);
