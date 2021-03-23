import React from 'react';
import { emailSelector, sideBarSelector } from '../../redux/selectors';

describe('redux | selectors', () => {
	const state = {
		emailsById: {
			"1": {
				id: "1",
				subject: "hey!",
				tags: ['tag01', 'tag02']
			},
			"2": {
				id: "2",
				subject: "Attention!",
				tags: []
			}
		},
		emailsIdArray: ['1', '2'],
		tags: ['tag01', 'tag02'],
		messageCount: 2
	};

	it('emailSelector returns the right data from state', () => {
			const emailData = {
				emailsById: {
					"1": {
						id: "1",
						subject: "hey!",
						tags: ['tag01', 'tag02']
					},
					"2": {
						id: "2",
						subject: "Attention!",
						tags: []
					}
				},
				emailsIdArray: ['1', '2'],
			};
		expect(emailSelector(state)).toEqual(emailData);
	});

	it('emailSelector returns the right data from state', () => {
		const sideBarData = {
			tagList: ['tag01', 'tag02'],
			messageCount: 2
		};
		expect(sideBarSelector(state)).toEqual(sideBarData);
	});
});