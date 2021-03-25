import React from 'react';
import { emailSelector, sideBarSelector } from '../../redux/selectors';

describe('redux | selectors', () => {
	const state = {
		emailsById: {
			'1': {
				id: '1',
				subject: 'hey!',
				tags: ['work', 'travel']
			},
			'2': {
				id: '2',
				subject: 'Attention!',
				tags: []
			}
		},
		emailsIdArray: {
			all: ['1', '2'],
			work: [],
			travel: []
		},
		tags: ['work', 'travel'],
		messageCount: 2,
		electedEmails: [],
		filter: 'all'
	};

	it('emailSelector returns the right data from state', () => {
			const emailData = {
				emailList: [
					{
						id: '1',
						subject: 'hey!',
						tags: ['work', 'travel']
					},
					{
						id: '2',
						subject: 'Attention!',
						tags: []
					}
				]
			};
		expect(emailSelector(state)).toEqual(emailData);
	});

	it('sideBarSelector returns the right data from state', () => {
		const sideBarData = {
			tagList: ['work', 'travel'],
			messageCount: 2
		};
		expect(sideBarSelector(state)).toEqual(sideBarData);
	});
});