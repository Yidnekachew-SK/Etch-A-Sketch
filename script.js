const container = document.querySelector(".container");
let numOfDivs = 0;
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

const mouseOver = function(event){
	let event1 = event.target;
	event1.classList.toggle("hover");
	event1.style.backgroundColor = randomColor();
}

const mouseOut = function(event){
	let event2 = event.target;
	event2.classList.toggle("hover");
}

const squares = document.querySelectorAll(".square");
squares.forEach(div => div.addEventListener("mouseover", mouseOver));
squares.forEach(div => div.addEventListener("mouseout", mouseOut));

let userInput;
const numOfSides = function(){
	do{
		userInput = prompt("Enter the no of squares per side(should be < 100): ");
	} while(!(userInput >= 0 && userInput < 100));

	const container2 = document.querySelector("div");
	container2.remove();

	const mainContainer = document.querySelector("main");
	const newContainer = document.createElement("div");
	newContainer.className = "container";
	mainContainer.append(newContainer);

	let totalSquares = parseInt(userInput);

	let newDivs = 0;
	while(newDivs < (totalSquares ** 2)){
	const divs = document.createElement("div");
	divs.className = "newSize";
	divs.style.width = 100/totalSquares + "%";
	divs.style.height = 100/totalSquares + "%";
	newContainer.append(divs);
	divs.addEventListener("mouseover", mouseOver);
	divs.addEventListener("mouseout", mouseOut);
	newDivs++;
}
}

const button = document.querySelector("button");
button.addEventListener("click", numOfSides);