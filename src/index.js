import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import './assets/css/main.css';
// import reducers from './reducers';
import initialState from './initialState';
// import registerServiceWorker from './registerServiceWorker';

function reducer(state, action) {
	switch (action.type) {
		default:
			return state;
	}
}

const store = createStore(reducer, initialState);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
// registerServiceWorker();
