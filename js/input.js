const KEY_CODES = {
	w: 87,
	s: 83,
	d: 68,
	a: 65,
	left: 37,
	up: 38,
	right: 39,
	down: 40
};

const setupInput = function () {
	document.addEventListener('keydown', keyPressed);
	document.addEventListener('keyup', keyReleased);
	canvas.addEventListener('mouseup', mouseClicked);
};

const mouseClicked = function (event) {
	if (!winner) {
		return;
	}

	loadLevel(levelOne);
	winner = null;
}

const keyPressed = function (event) {
	blueCar.updateKeys(event, true);
	greenCar.updateKeys(event, true);
};

const keyReleased = function (event) {
	blueCar.updateKeys(event, false);
	greenCar.updateKeys(event, false);
};