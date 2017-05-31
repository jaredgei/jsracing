const blueCarImage = document.createElement('img');
const greenCarImage = document.createElement('img');
const trackImages = [];
let imagesToLoad;

const loadImages = function () {
	const images = [
		{image: blueCarImage, file: 'car_blue.png'},
		{image: greenCarImage, file: 'car_green.png'},
		{trackType: TRACK_CODES.ROAD, file: 'track_road.png'},
		{trackType: TRACK_CODES.WALL, file: 'track_wall.png'},
		{trackType: TRACK_CODES.FINISH, file: 'track_finish.png'},
		{trackType: TRACK_CODES.TREE, file: 'track_tree.png'},
		{trackType: TRACK_CODES.FLAG, file: 'track_flag.png'}
	];

	imagesToLoad = images.length;
	images.forEach(function (imageData) {
		if (imageData.image) {
			initImage(imageData.image, imageData.file);
		} else {
			initTrackImage(imageData.trackType, imageData.file);
		}
	});

};

const initImage = function (image, fileName) {
	image.onload = imageLoaded;
	image.src = 'images/' + fileName;
};

const initTrackImage = function (trackType, fileName) {
	trackImages[trackType] = document.createElement('img');
	initImage(trackImages[trackType], fileName);
};

const imageLoaded = function () {
	imagesToLoad--;

	if (imagesToLoad === 0) {
		startGame();
	}
};