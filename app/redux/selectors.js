export const emailSelector = (state) => {
	const { emailsById, emailsIdArray } = state;
	const emailList = [];

	emailsIdArray.forEach((id) => {
		emailList.push(emailsById[id]);
	});

	return {
		emailList
	}
}

export const sideBarSelector = (state) => {
	return {
		tagList: state.tags,
		messageCount: state.messageCount
	}
}

