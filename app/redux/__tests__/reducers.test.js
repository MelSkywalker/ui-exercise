import React from 'react';
import emailsReducer, { LOAD_EMAIL_LIST } from '../../redux/reducers';

describe('Redux | reducers', () => {
	const payload = {
		messages: [
			{
				"id": "1",
				"subject": "Hello",
			  },
			  {
				"id": "2",
				"subject": "hello!!!",
			  }
		]
	}

	it('should return the initial state', () => {
		expect(emailsReducer(undefined, {})).toMatchSnapshot();
	});

	it('should populate ', () => {
		const state = emailsReducer(undefined, {
			type: LOAD_EMAIL_LIST,
			payload
		});

		expect(state).toMatchSnapshot();
	});
})