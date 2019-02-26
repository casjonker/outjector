import React from 'react';
import ReactDOM from 'react-dom';

import Injector from 'lib/Injector';
import { withInjector, loadComponent } from 'lib/Injector';

import App from './components/App';

Injector.component.register('App', App);

function appBoot() {
    Injector.ready(() => {
        const AppComponent = loadComponent('App');
        // const SecondaryComponent = Injector.component.get('SecondaryComponent');

        ReactDOM.render(
            (
                <div>
                    <AppComponent />
                    {/*<SecondaryComponent />*/}
                </div>
            ),
            document.getElementById('app')
        );
    });

    window.setTimeout(() => Injector.load(), 0);
}

window.onload = appBoot;
