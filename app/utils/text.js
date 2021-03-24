const messageFormatter = (text) => {
	let replacedText = text.replace(/<p[^>]*>/g, "");
	replacedText = replacedText.replace(/<\/p[^>]*>/g, " ");
	return replacedText;
}

export default messageFormatter;
