import React from 'react';
import { useSelector } from 'react-redux';
import { emailSelector } from '../redux/selectors';
import EmailItem from './EmailItem';

const EmailList = () => {
	const { emailList } = useSelector(emailSelector);

	return (
		<div className="email-list">
			{emailList.map(email => (
				<EmailItem
					key={email.id}
					content={email}
				/>
			))}
		</div>
	)
};

export default EmailList;