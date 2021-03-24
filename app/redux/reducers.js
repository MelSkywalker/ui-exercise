export const initialState = {
		emailsById: {},
		emailsIdArray: [],
		tags: [],
		messageCount: null,
		selectedEmails: []
};

// Actions
export const LOAD_EMAIL_LIST = 'LOAD_EMAIL_LIST';
export const SELECT_EMAIL = 'SELECT_EMAIL';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

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
		case SELECT_EMAIL: {
			const { selectedItemId, selectedItemStatus } = payload;
			const { selectedEmails } = state;
			const items = selectedEmails;
			if (selectedItemStatus && !items.includes(selectedItemId)) {
				items.push(selectedItemId)
			} else {
				const index = items.indexOf(selectedItemId);
				items.splice(index, 1);
			}
			return {
				...state,
				selectedEmails: items
			};
		}
		case DELETE_MESSAGE: {
			const { emailsById, emailsIdArray, selectedEmails } = state; // emailsIdList
			if (selectedEmails.length) {
				const emailsToRemove = selectedEmails;
				const newEmailsById = { ...emailsById };
				const newIdArray = [...emailsIdArray];

				emailsToRemove.forEach(id => {
					delete newEmailsById[id];
					const index = newIdArray.indexOf(id); // TODO: automate emailsIdArray hydration
					newIdArray.splice(index, 1);
				});

				return {
					...state,
					emailsById: newEmailsById,
					emailsIdArray: newIdArray,
					selectedEmails: []
				}
			}
			return state;
		}
		default:
		return state;
	}
}

export default emailsReducer;
