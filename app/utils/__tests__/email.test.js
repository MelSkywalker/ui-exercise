import React from 'react';
import { enableMocks } from "jest-fetch-mock";
import useEmails, { fetchEmailList } from '../email';

describe('utils | fetchEmailList', () => {
	enableMocks();

	beforeEach(() => {
		fetch.resetMocks();
	});

	it('gets messages from API', async () => {
		fetch.mockResponseOnce(JSON.stringify({"messages": [{"id": "1"}]}));
		const emails = await fetchEmailList();
		expect(emails).toEqual({"messages": [{"id": "1"}]});
		expect(fetch).toHaveBeenCalled();
	});

	// TODO test fetch fail
});

// TODO test utils | usesEmails
