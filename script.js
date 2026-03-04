const container = document.querySelector(".container");
let numOfDivs = 0;
let choosenColor = null;

while(numOfDivs < 256){
	const divs = document.createElement("div");
	divs.className = "square";
	container.append(divs);
	numOfDivs++;
}

const randomColor = function(){
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);

	return `rgb(${red},${green},${blue})`;
}

const chooseColor = function(event){
	let cell = event.target;
	if (choosenColor === null) {
		cell.style.backgroundColor = randomColor();
	} else {
		cell.style.backgroundColor = choosenColor;
	}
}

const colorInput = document.querySelector(".colorChooser");
colorInput.addEventListener("input", (event) => {
	choosenColor = event.target.value;
});

const randomColorButton = document.querySelector(".randomColor");
randomColorButton.addEventListener("click", () => {
	choosenColor = null;
})

const squares = document.querySelectorAll(".square");
squares.forEach(div => div.addEventListener("click", chooseColor));

let userInput;
const numOfSides = function(){
	do{
		userInput = prompt("Enter the no of squares per side(should be < 100): ");
	} while(!(userInput >= 0 && userInput < 100));

	const container2 = document.querySelector(".container");
	container2.remove();

	const mainContainer = document.querySelector(".main-container");
	const newContainer = document.createElement("div");
	newContainer.className = "container";
	mainContainer.append(newContainer);

	let totalSquares = parseInt(userInput);

	let newDivs = 0;
	while(newDivs < (totalSquares ** 2)){
		const divs = document.createElement("div");
		divs.className = "square";
		divs.style.width = 100/totalSquares + "%";
		divs.style.height = 100/totalSquares + "%";
		newContainer.append(divs);
		divs.addEventListener("click", chooseColor);
		newDivs++;
	}
}

const button = document.querySelector(".changeSize");
button.addEventListener("click", numOfSides);

const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
	const squareDiv = document.querySelectorAll(".square");
	squareDiv.forEach(square => square.style.backgroundColor = "white");
})