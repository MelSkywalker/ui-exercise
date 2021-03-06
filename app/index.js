import React from 'react';
import reactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import App from './containers/App';

import '../scss/main.scss';

reactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
document.getElementById('root'));
