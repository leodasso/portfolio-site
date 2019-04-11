import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';


// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Import saga middleware
import createSagaMiddleware from 'redux-saga';

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
	switch (action.type) {
		case 'SET_TAGS':
			return action.payload;
		default:
			return state;
	}
}

const currentPage = (state = 'projects', action) => {
	switch (action.type) {
		case 'SET_PAGE': return action.payload;
		default: return state;
	}
}

// Create one store that all components can use
const storeInstance = createStore(
	combineReducers({
		currentPage,
		tags,
	}),
	// Add sagaMiddleware to our store
	applyMiddleware(sagaMiddleware, logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
	document.getElementById('root'));
registerServiceWorker();
