import React from 'react';

import Header from '../components/Header';
import EmailList from '../components/EmailList';
import './mainPage.scss';

const MainPage = ({status}) => {
	console.log(status);
	return (
		<div className="main-page">
			<Header />
			{status === 'loaded' &&
				<EmailList />
			}
		</div>
	)
}

export default MainPage;