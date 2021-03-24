import React from 'react';
import dateFormatter from '../date';

describe('utils | date', () => {
	const today = '2021-03-23T15:01:13Z';

	it('formats date for current date', () => {
		// hour number is smaller than 12 and minutes number is smaller than 10
		const date = '2021-03-23T18:07:13Z';
		const formattedDate = dateFormatter(date);
		// hour number is greater than 12 and minutes number is greater than 10
		const date2 = '2021-03-23T10:27:13Z';
		const formattedDate2 = dateFormatter(date2);

		expect(formattedDate).toBe('6:07 PM');
		expect(formattedDate2).toBe('10:27 AM');
	});

	it('formats date for this year date', () => {
		// day number is greater than 10
		const date = '2021-01-30T15:01:13Z';
		const formattedDate = dateFormatter(date);
		// day number is smaller than 10
		const date2 = '2021-01-08T15:01:13Z';
		const formattedDate2 = dateFormatter(date2);

		expect(formattedDate).toBe('Jan 30');
		expect(formattedDate2).toBe('Jan 08');

	});

	it('formats date for past years', () => {
		const date = '2018-07-30T15:01:13Z';
		const formattedDate = dateFormatter(date);
		expect(formattedDate).toBe('7/30/18');
	});
});