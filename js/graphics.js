const createRotatingImage = function (image, x, y, angle) {
	canvasContext.save();
	canvasContext.translate(x, y);
	canvasContext.rotate(angle);
	canvasContext.drawImage(image, -image.width / 2, -image.height / 2);
	canvasContext.restore();
};

const createRect = function (x, y, width, height, color) {
	canvasContext.fillStyle = color;
	canvasContext.fillRect(x, y, width, height);
};

const createCircle = function (x, y, radius, color) {
	canvasContext.fillStyle = color;
	canvasContext.beginPath();
	canvasContext.arc(x, y, radius, 0, 2*Math.PI, true);
	canvasContext.fill();
};

const createText = function (text, x, y, color) {
	canvasContext.fillStyle = color;
	canvasContext.fillText(text, x, y);
};