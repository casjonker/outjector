import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import Injector, { withInjector, provideInjector } from 'lib/Injector';

import App from './components/App';
import initStore from './store';

function appBoot() {
    window.ss = window.ss || {};

    initStore();

    console.log('appBoot');

    Injector.ready(() => {
        const rootReducer = combineReducers(Injector.reducer.getAll());
        const store = createStore(
            rootReducer, {},
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );

        window.ss.store = store;
        Injector.reducer.setStore(store);

        const AppComponent = provideInjector(() => (
            <Provider store={store}>
                <App />
            </Provider>
        ));

        ReactDOM.render(
            <AppComponent />,
            document.getElementById('app')
        );
    });

    window.setTimeout(() => Injector.load(), 0);
}

window.onload = appBoot;
