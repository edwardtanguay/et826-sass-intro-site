export const Balls = (colors: string[]) => {
let html = '';
for (const color of colors) {
	html += `<div class="w-16 h-16 flex justify-center items-center rounded-[50%] mb-3" style="background-color: ${color}">${color}</div>`;
}
	return `${html}`
}