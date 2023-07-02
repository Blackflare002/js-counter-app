let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;
let random = 0;

function retrieveFromStorage() {
	const items = [];
	for (let i = 0; i <= 5; i++) {
		const key = String(i);
		const item = localStorage.getItem(key);
		if (item !== null) {
			items.push(item);
		}
	}
	return items;
}

const allItems = retrieveFromStorage();
allItems.map((el) => {
	saveEl.textContent += " " + el + " -";
});

function increment() {
	count++;
	countEl.textContent = count;
	console.log("Count");
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
	console.log("Save");
};

const clearFn = () => {
	console.log("Clear");
	saveEl.textContent = "Previous Entires:";
	localStorage.clear();
};
