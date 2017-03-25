import { createStore,combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import logger from 'redux-logger';
import ThunkMiddleware from 'redux-thunk';
import DevTools from './DevTools';
import rootReducer from '../views/HomeRedux';

const finalCreateStore = compose(applyMiddleware(ThunkMiddleware,logger),DevTools.instrument())(createStore);
const reducer = combineReducers(Object.assign({},rootReducer,{
    routing: routerReducer
}))

export default function configureStore(initialState) {
    const store = finalCreateStore(rootReducer,initialState);
    return store;
}