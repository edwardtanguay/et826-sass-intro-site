import { Balls } from "./Balls";

const note = ' - the first site';
const appTitle = 'Our Sass Site' + note;

export const Header = () => {
	return `<h1 class="text-3xl mb-3">${appTitle}</h1>
${Balls(['brown', 'orchid', 'tomato'])}	
	`
}