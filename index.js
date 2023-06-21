let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
	count++;
	countEl.textContent = count;
	// console.log(count);
}

const save = () => {
	let countStr = " " + count + " -";
	saveEl.textContent += countStr;
	localStorage.setItem("count", count);
	countEl.textContent = 0;
	count = 0;
	// console.log(count);
};
