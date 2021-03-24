import messageFormatter from '../text';

describe('utils | messageFormatter', () => {
	it('removes <p></p> tags from text', () => {
		const text = '<p>Hello</p><p>world</p>';
		const formattedText = messageFormatter(text);
		expect(formattedText).toBe('Hello world ');
	});
});