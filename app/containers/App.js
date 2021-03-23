import React from 'react';
import useEmails from '../utils/email';

import MainPage from '../pages/MainPage';

const App = () => {
	const fetchStatus = useEmails();
	return (
		<div>
			<MainPage status={fetchStatus} />
		</div>
	)
}

export default App;