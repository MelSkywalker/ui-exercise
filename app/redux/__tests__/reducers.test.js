import React from 'react';
import emailsReducer, { LOAD_EMAIL_LIST } from '../../redux/reducers';

describe('Redux | reducers', () => {
	const payload = {
		messages: [
			{
				"id": "1",
				"subject": "Hello",
				"tags": ["tag02"]
			},
			{
				"id": "2",
				"subject": "hello!!!",
				"tags": ["tag01", "tag02"]
			}
		]
	}

	it('should return the initial state', () => {
		expect(emailsReducer(undefined, {})).toMatchSnapshot();
	});

	it('should populate the state with emails and tags', () => {
		const state = emailsReducer(undefined, {
			type: LOAD_EMAIL_LIST,
			payload
		});
		expect(state.emailsById['1'].subject).toEqual('Hello');
		expect(state.emailsIdArray).toEqual(['1', '2']);
		expect(state.tags).toHaveLength(2); // check it is not repeating tags
		expect(state).toMatchSnapshot();
	});
})