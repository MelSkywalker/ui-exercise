import React, { Fragment } from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import EmailList from '../components/EmailList';
import './mainPage.scss';

const MainPage = ({status}) => {
	console.log(status);
	return (
		<div className="main-page">
			<Header />
			{status === 'loaded' &&
				<div className="page-container">
					<Fragment>
						<SideBar />
						<EmailList />
					</Fragment>
				</div>
			}
		</div>
	)
}

export default MainPage;