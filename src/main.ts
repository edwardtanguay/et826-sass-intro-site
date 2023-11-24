import { Header } from './components/Header';
import './style.scss'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
${Header()}
<p>testing</p>
<button class="btn-primary">Press Here</button>
<button class="btn-warning">Press Here</button>
<button class="btn-danger">Press Here</button>
`;