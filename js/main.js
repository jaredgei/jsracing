let canvas, canvasContext;
let winner;
const blueCar = new Car();
const greenCar = new Car();

window.onload = function () {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	getTrackSize();
	createRect(0, 0, canvas.width, canvas.height, '#000000');
	createText('Loading...', canvas.width / 2, canvas.height / 2, '#ffffff');
	loadImages();
};

const startGame = function () {
	setupInput();
	setInterval(function () {
		move();
		draw();
	}, 1000/30); // 30 FPS
	loadLevel(levelOne);
};

const loadLevel = function (map) {
	track = map.slice();
	blueCar.reset(blueCarImage, 'Blue Car', KEY_CODES.w, KEY_CODES.d, KEY_CODES.s, KEY_CODES.a);
	greenCar.reset(greenCarImage, 'Green Car', KEY_CODES.up, KEY_CODES.right, KEY_CODES.down, KEY_CODES.left);
};

const draw = function () {
	if (winner) {
		showMenu();
		return;
	}

	drawTrack();
	blueCar.draw();
	greenCar.draw();
};

const move = function () {
	if (winner) {
		return;
	}

	blueCar.move();
	greenCar.move();
};

const showMenu = function () {
	createRect(0, 0, canvas.width, canvas.height, '#000000');
	createText(winner.name + ' wins!!! Click to continue.', canvas.width / 2, canvas.height / 2, '#ffffff');
};