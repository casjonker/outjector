import Injector from 'lib/Injector';

import { AppReducer } from './AppReducer';

export default function () {
    Injector.reducer.register('AppReducer', AppReducer);
}


