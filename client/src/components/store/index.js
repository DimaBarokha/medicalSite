import {createStore, combineReducers} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import {pickBranch} from './Branch/reducer'

const reducer = combineReducers({
    pick: pickBranch,
    form: reduxFormReducer, // mounted under "form"
});

const store = createStore(reducer);

export default store;
