import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { LOAD_EMAIL_LIST } from '../redux/reducers';

async function fetchEmailList () {
	const res = await fetch('./emails.json');
	if (res.ok) {
		return await res.json();
	}
	else {
		throw new Error('Error loading data');
	}
}

const useEmails = () => {
	const [loadStatus, setStatus] = useState('loading');
	const dispatch = useDispatch();

	useEffect(() => {
		fetchEmailList()
		.then((data) => {
			dispatch({
				type: LOAD_EMAIL_LIST,
				payload: {
					messages: data.messages
				}
			});
			setStatus('loaded');
		})
		.catch((err) => {
			console.log(err);
		})
	})

	return loadStatus;
}

export default useEmails;