var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");
var enter = document.querySelector("button");

function setGradientAndText() {
    var css = document.querySelector("h3");
    document.body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"

    css.textContent = document.body.style.background + ";";
}

function getRandomColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';

	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}

	return color;
}

function setRandomColors() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	
	setGradientAndText();
}

// --------------------------------------------------------------
// WORKING ON WHEN ENTER KEY IS PRESSED GENERATE RANDOM COLORS
// function randomColorWhenKeyPressed(event, keyCode) {
//     if(setGradientAndText() > 16 && event.keyCode === 13) {
//         setGradientAndText()
//     }
// }

// enter.addEventListener("keypress", randomColorWhenKeyPressed);
// WORKING ON WHEN ENTER KEY IS PRESSED GENERATE RANDOM COLORS
// --------------------------------------------------------------

body.addEventListener("onload", setGradientAndText());
color1.addEventListener("input", setGradientAndText);
color2.addEventListener("input", setGradientAndText);
button.addEventListener('click', setRandomColors);
