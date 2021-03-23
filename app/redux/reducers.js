export const initialState = [
	{
		emailsById: {},
		emailsIdArray: [],
		tags: [],
		messageCount: null
	}
];

// Actions
export const LOAD_EMAIL_LIST = 'LOAD_EMAIL_LIST';

// Reducers
const emailsReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case LOAD_EMAIL_LIST: {
			const { messages } = payload;
			const emailsById = {};
			let allTags = [];
			messages.forEach((message) => {
				emailsById[message.id] = message; // normalization
				allTags.push(...message.tags);
			});
			const emailsIdArray = messages.map(message => message.id);
			const tagSet = new Set(allTags);
			const tags = Array.from(tagSet);
			const messageCount = emailsIdArray.length;

			return {
				...state,
				emailsById,
				emailsIdArray,
				tags,
				messageCount
			};
		}
		default:
		return state;
	}
}

export default emailsReducer;