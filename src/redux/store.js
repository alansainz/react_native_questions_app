import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';

// const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	// composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware)),
	composeEnhancers(applyMiddleware(thunkMiddleware)),
);

export default store;
