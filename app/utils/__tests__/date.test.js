import React from 'react';
import dateFormatter from '../date';

// TODO: mock today date to keep tests updated
// tested on '2021-03-23';

describe('utils | date', () => {
	it('formats date for current date', () => {
		// hour number is smaller than 12 and minutes number is smaller than 10
		const date = '2021-03-23T18:07:13Z';
		const formattedDate = dateFormatter(date);
		console.log('formated', formattedDate);
		expect(formattedDate).toBe('6:07 PM');

		// hour number is greater than 12 and minutes number is greater than 10
		const date2 = '2021-03-23T10:27:13Z';
		const formattedDate2 = dateFormatter(date2);
		expect(formattedDate2).toBe('10:27 AM');
	});

	it('formats date for this year date', () => {
		// day number is greater than 10
		const date = '2021-01-30T15:01:13Z';
		const formattedDate = dateFormatter(date);
		expect(formattedDate).toBe('Jan 30');

		// day number is smaller than 10
		const date2 = '2021-01-08T15:01:13Z';
		const formattedDate2 = dateFormatter(date2);
		expect(formattedDate2).toBe('Jan 08');
	});

	it.only('formats date for past years', () => {
		const date = '2018-07-30T15:01:13Z';
		const formattedDate = dateFormatter(date);
		expect(formattedDate).toBe('7/30/18');
	});
});