import Injector from 'lib/Injector';

import SecondaryComponent from './components/SecondaryComponent';
import CoolerApp from './components/CoolerApp';

Injector.component.register('SecondaryComponent', SecondaryComponent);

Injector.transform(
    'test-replacement',
    (updater) => {
        updater.component('App', CoolerApp, 'CoolerApp');
    }
);
