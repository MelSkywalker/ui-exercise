import React from 'react';
import emailsReducer, { initialState, LOAD_EMAIL_LIST, SELECT_EMAIL } from '../../redux/reducers';

describe('redux | reducers', () => {
	it('should return the initial state', () => {
		const initState = initialState;
		expect(emailsReducer(undefined, {})).toEqual(initState);
	});

	it('should populate the state with emails and tags', () => {
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
		};

		const newState = emailsReducer(undefined, {
			type: LOAD_EMAIL_LIST,
			payload
		});

		expect(newState.emailsById['1'].subject).toEqual('Hello');
		expect(newState.emailsIdArray).toEqual(['1', '2']);
		expect(newState.tags).toHaveLength(2); // check it is not repeating tags
		expect(newState.messageCount).toBe(2);
		expect(newState).toMatchSnapshot();
	});

	it('should populate the state with selected emails', () => {
		const state = {
			selectedEmails: ['4', '5']
		};

		const payload = {
			selectedItemId: '1',
			selectedItemStatus: true
		};

		const newState = emailsReducer(state, {
			type: SELECT_EMAIL,
			payload
		});

		expect(newState.selectedEmails).toEqual(['4', '5', '1']);
	});

	it('should populate the state with selected emails', () => {
		const state = {
			selectedEmails: ['4', '5']
		};

		const payload = {
			selectedItemId: '5',
			selectedItemStatus: false
		};

		const newState = emailsReducer(state, {
			type: SELECT_EMAIL,
			payload
		});

		expect(newState.selectedEmails).toEqual(['4']);
	});
});
