import React from 'react';
import emailsReducer,
	{	initialState,
		LOAD_EMAIL_LIST,
		SELECT_EMAIL,
		DELETE_MESSAGE,
		FILTER_EMAILS
	} from '../reducers';

describe('redux | reducers', () => {

	it('should return the initial state', () => {
		const initState = initialState;
		expect(emailsReducer(undefined, {})).toEqual(initState);
	});

	it('should populate the state with emails and tags', () => {
		const payload = {
			messages: [
				{
					'id': '1',
					'subject': 'Hello',
					'tags': ['travel']
				},
				{
					'id': '2',
					'subject': 'hello!!!',
					'tags': ['work', 'travel']
				}
			]
		};

		const newState = emailsReducer(undefined, {
			type: LOAD_EMAIL_LIST,
			payload
		});

		expect(newState.emailsById['1'].subject).toEqual('Hello');
		expect(newState.emailsIdArray.all).toEqual(['1', '2']);
		expect(newState.emailsIdArray.work).toEqual(['2']);
		expect(newState.emailsIdArray.travel).toEqual(['1', '2']);
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

	it('should remove from the state the selected emails', () => {
		const state = {
			emailsById: {
				1: {
					'id': '1',
					'subject': 'Hello'
				},
				2: {
					'id': '2',
					'subject': 'hello!!!'
				},
				3: {
					'id': '2',
					'subject': 'hey!'
				},
			},
			emailsIdArray: {
				all: ['1', '2', '3'],
				work: [],
				travel: []
			},
			selectedEmails: ['3', '1']
		};

		const newState = emailsReducer(state, { type: DELETE_MESSAGE });
		expect(newState.selectedEmails).toHaveLength(0);
		expect(newState.emailsIdArray.all).toEqual(['2']);
	});

	it('returns the previous state if DELETE_ACTION is called but there are no emails selected', () => {
		const state = {
			emailsById: {
				1: {
					'id': '1',
					'subject': 'Hello'
				},
				2: {
					'id': '2',
					'subject': 'hello!!!'
				},
				3: {
					'id': '2',
					'subject': 'hey!'
				},
			},
			emailsIdArray: {
				all: ['1', '2', '3'],
				work: [],
				travel: []
			},
			selectedEmails: []
		};

		const newState = emailsReducer(state, { type: DELETE_MESSAGE });
		expect(newState).toEqual(state);
	});

	it('sets the email filter', () => {
		const state = { filter: 'all' };
		const payload = { filterToApply: 'travel' };
		const newState = emailsReducer(state, {
			type: FILTER_EMAILS,
			payload
		});
		expect(newState).toEqual({ filter: 'travel' });
	});
});
