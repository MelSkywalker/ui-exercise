export const initialState = {
		emailsById: {},
		emailsIdArray: {
			all: [],
			work: [],
			travel: []
		},
		tags: [],
		messageCount: null,
		selectedEmails: [],
		filter: 'all'
};

// Actions
export const LOAD_EMAIL_LIST = 'LOAD_EMAIL_LIST';
export const SELECT_EMAIL = 'SELECT_EMAIL';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const FILTER_EMAILS = 'FILTER_EMAILS';

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

			const all = messages.map(message => message.id);

			// TODO: populate dinamically
			const workEmails = messages.filter(message => message.tags.includes('work')).map(message => message.id);
			const travelEmails = messages.filter(message => message.tags.includes('travel')).map(message => message.id);

			const tagSet = new Set(allTags);
			const tags = Array.from(tagSet);

			const messageCount = all.length;

			return {
				...state,
				emailsById,
				emailsIdArray: {
					all,
					work: workEmails,
					travel: travelEmails
				},
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
			const { emailsById, emailsIdArray, selectedEmails } = state;

			if (selectedEmails.length) {
				const emailsToRemove = selectedEmails;
				const newEmailsById = { ...emailsById };
				const newIdArray = emailsIdArray;

				emailsToRemove.forEach(id => {
					delete newEmailsById[id];

					const index = newIdArray.all.indexOf(id);
					newIdArray.all.splice(index, 1);

					const workIndex = newIdArray.work.indexOf(id);
					newIdArray.work.splice(workIndex, 1);

					const travelIndex = newIdArray.travel.indexOf(id);
					newIdArray.travel.splice(travelIndex, 1)

				});

				const newEmailCount = newIdArray.all.length;

				return {
					...state,
					emailsById: newEmailsById,
					selectedEmails: [],
					messageCount: newEmailCount
				}
			}
			return state;
		}
		case FILTER_EMAILS: {
			const { filterToApply } = payload;

			return {
				...state,
				filter: filterToApply
			}
		}
		default:
		return state;
	}
}

export default emailsReducer;
