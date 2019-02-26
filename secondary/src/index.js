import Injector from 'lib/Injector';

import SecondaryComponent from './components/SecondaryComponent';
import CoolerApp from './components/CoolerApp';

Injector.component.register('SecondaryComponent', SecondaryComponent);

window.document.addEventListener('DOMContentLoaded', () => {
    Injector.transform(
        'test-replacement',
        (updater) => {
            updater.component('App', CoolerApp, 'CoolerApp');

            console.log(Injector.reducer.getAll());

            updater.reducer('AppReducer', (originalReducer) => (globalState) => (state, { type, payload }) => {
                console.log(globalState, state, type, payload);

                if (type === 'INCREMENT_COUNTER') {
                    return { ...state, count: state.count + 10 };
                }

                return originalReducer(state, { type, payload });
            });
        }
    );
});
