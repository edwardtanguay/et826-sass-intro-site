export const ExampleButtonToggle = () => {
	return `
	<button class="btnToggle btn-primary">Toggle Message</button>
	`
}

setTimeout(() => {
	const btnToggleElem = document.querySelector<HTMLButtonElement>('.btnToggle');

	if (btnToggleElem) {
		btnToggleElem.addEventListener('click', () => {
			alert('it was clicked')
		})
	}
})