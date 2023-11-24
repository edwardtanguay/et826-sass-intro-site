import { Balls } from './components/Balls';
import { ExampleButtonToggle } from './components/ExampleButtonToggle';
import { Header } from './components/Header';
import './style.scss'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
${Header()}
<p class="mb-4">testing</p>

<div class="flex gap-3 justify-between">
	<button class="btn-primary">Press Here</button>
	<button class="btn-warning">Press Here</button>
	<button class="btn-danger">Press Here</button>
</div>
<hr class="mt-4 mb-4"/>

<div class="flex gap-6">
${Balls(['purple', 'orange'])}
${Balls(['blue', 'red', 'green'])}
</div>

<hr class="mt-4 mb-4"/>

${ExampleButtonToggle()}
`;