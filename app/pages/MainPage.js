import React from 'react';

import EmailList from '../components/EmailList';

const MainPage = ({status}) => {
	console.log(status);
	return (
		<div>
			{status === 'loaded' &&
				<EmailList />
			}
		</div>
	)
}

export default MainPage;