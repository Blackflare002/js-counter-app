let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;
let random = 0;

if (localStorage.getItem(0)) {
	saveEl.textContent +=
		" " + localStorage.getItem(0);
}

function increment() {
	count++;
	countEl.textContent = count;
	// console.log(count);
}

const save = () => {
	let countStr = " " + count + " -";
	saveEl.textContent += countStr;
	if (random === 5) {
		random = 0;
	}
	localStorage.setItem(random, count);
	random += 1;
	countEl.textContent = 0;
	count = 0;
	// console.log(count);
};
