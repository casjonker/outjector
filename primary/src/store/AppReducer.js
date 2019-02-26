import { INCREMENT_COUNTER } from './AppActionTypes';


const initialState = {
    count: 0,
};

export function AppReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return { ...state, count: state.count + 1 };
        default:
            return state;
    }
}
