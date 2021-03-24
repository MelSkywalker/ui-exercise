// TODO: Timezone check

const dateFormatter = (dateToFormat) => {
	const today = new Date();
	let todayYear = today.getFullYear();
	let todayMonth = today.getMonth()+1;
	let todayDay = today.getDate();
	const todayString = `${todayYear} ${todayMonth} ${todayDay}`;

	const emailDate = new Date(dateToFormat);
	let emailYear = emailDate.getFullYear();
	let emailMonth = emailDate.getMonth()+1;
	let emailDay = emailDate.getDate();
	const emailDateString = `${emailYear} ${emailMonth} ${emailDay}`;

	if (todayString === emailDateString) {
		let emailHour = emailDate.getUTCHours();
		let emailMinutes = emailDate.getUTCMinutes();
		let hourString = 'AM';

		if (emailHour > 12) {
			emailHour -= 12;
			hourString = 'PM';
		}

		if (emailMinutes < 10) {
			emailMinutes = `0${emailMinutes}`;
		}
		return `${emailHour}:${emailMinutes} ${hourString}`;
	}
	else if (todayYear === emailYear) {
		const monthNamesAbb = [
			"Jan", "Feb", "Mar", "Apr", "May", "Jun",
  			"Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
		];
		if (emailDay < 10) {
			emailDay = `0${emailDay}`;
		}
		return `${monthNamesAbb[emailMonth - 1]} ${emailDay}`;
	}
	else {
		emailYear = emailYear.toString().substring(2)
		return `${emailMonth}/${emailDay}/${emailYear}`;
	}
}

export default dateFormatter;
