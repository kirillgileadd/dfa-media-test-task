export const bodyLock = (value: boolean) => {
	if (value) {
		document.body.style.overflowY = 'hidden'
	} else {
		document.body.style.overflowY = 'auto'
	}
}