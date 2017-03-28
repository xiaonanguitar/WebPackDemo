import { createStore,combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import logger from 'redux-logger';
import ThunkMiddleware from 'redux-thunk';
import createFetchMiddleware from 'redux-composable-fetch';
import DevTools from './DevTools';
import list from '../components/Home/PreviewListRedux';

const FetchMiddleware = createFetchMiddleware();

const finalCreateStore = compose(applyMiddleware(
    ThunkMiddleware,
    FetchMiddleware,
    logger
),DevTools.instrument())(createStore);
const reducer = combineReducers({
    routing: routerReducer,
    list
})

export default function configureStore(initialState) {
    const store = finalCreateStore(reducer,initialState);
    return store;
}