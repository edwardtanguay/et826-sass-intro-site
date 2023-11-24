import { Balls } from "./Balls";

export const ExampleButtonToggle = () => {
	return `
	<button class="btnToggle btn-primary">Toggle Balls</button>
	<div class="balls mt-4">
	${Balls(['lightgreen', 'goldenrod'])}
	</div>
	`
}

setTimeout(() => {
	const btnToggleElem = document.querySelector<HTMLButtonElement>('.btnToggle');
	const ballsElem = document.querySelector<HTMLDivElement>('.balls');

	if (btnToggleElem && ballsElem) {
		btnToggleElem.addEventListener('click', () => {
			ballsElem.style.display = ballsElem.style.display === 'none' ? 'block' : 'none';
		})
	}
})