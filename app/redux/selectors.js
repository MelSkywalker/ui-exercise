export const emailSelector = (state) => {
	const { emailsById, emailsIdArray, filter } = state;
	const emailList = []; // these are the messages to show

	if(emailsIdArray[filter]) {
		emailsIdArray[filter].forEach((id) => {
			emailList.push(emailsById[id]);
		});
	}

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
