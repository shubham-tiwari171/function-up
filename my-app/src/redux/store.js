// import {createStore} from 'redux';
// import {rootReducer} from './rootReducer';

// export const store = createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )



import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from './rootReducer';
const store = configureStore({
    reducer: rootReducer,
});
export default store;