export const emailSelector = (state) => {
	return {
		emailsById: state.emailsById,
		emailsIdArray: state.emailsIdArray
	}
}

export const sideBarSelector = (state) => {
	return {
		tagList: state.tags,
		messageCount: state.messageCount
	}
}

