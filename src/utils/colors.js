let r = document.querySelector(":root");
let colors = document.getElementsByName("colors");
function pipAmber() {
	r.style.setProperty("--main", "255, 170, 60");
	r.style.setProperty("--alt", "120, 75, 20");
	r.className = "amber";
}

function pipRed() {
	r.style.setProperty("--main", "255,40,0");
	r.style.setProperty("--alt", "160,20,0");
	r.className = "red";
}

function pipGreen() {
	r.style.setProperty("--main", "0,230,50");
	r.style.setProperty("--alt", "0,160,30");
	r.className = "green";
}

function pipWhite() {
	r.style.setProperty("--main", "220,220,220");
	r.style.setProperty("--alt", "100,100,100");
	r.className = "white";
}

function pipBlack() {
	r.style.setProperty("--main", "200,220,250");
	r.style.setProperty("--alt", "90,100,150");
	r.className = "black";
}

function pipBlue() {
	r.style.setProperty("--main", "50,150,255");
	r.style.setProperty("--alt", "20,80,160");
	r.className = "blue";
}

function getColor() {
	for (let i = 0; i < colors.length; i++) {
		if (colors[i].checked) r.className = colors[i].value;
	}
}
export { pipAmber, pipRed, pipGreen, pipBlue, pipBlack, pipWhite, getColor };
