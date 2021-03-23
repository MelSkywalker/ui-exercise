export const initialState = [
	{
		emailsById: {},
		emailsIdArray: []
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
			messages.forEach((message) => {
				emailsById[message.id] = message;
			});
			const emailsIdArray = messages.map(message => message.id);
			return {
				...state,
				emailsById,
				emailsIdArray
			};
		}
		default:
		return state;
	}
}

export default emailsReducer;