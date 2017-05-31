const TRACK_COLUMNS = 20;
const TRACK_ROWS = 15;
const TRACK_CODES = {
	ROAD: 0,
	WALL: 1,
	PLAYERSTART: 2,
	FINISH: 3,
	TREE: 4,
	FLAG: 5
};

const levelOne = [4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4,
		  	   	  1, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 1,
		  	   	  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
		  	   	  1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
		  	   	  1, 0, 0, 1, 5, 0, 0, 0, 0, 0, 0, 1, 4, 4, 4, 4, 1, 0, 0, 1,
		  	   	  1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 4, 4, 4, 4, 1, 0, 0, 1,
		  	   	  1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 4, 4, 1, 0, 0, 1,
		  	   	  1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 4, 4, 4, 1, 0, 0, 1,
		  	   	  1, 0, 0, 1, 0, 0, 1, 4, 4, 1, 0, 0, 0, 1, 4, 4, 1, 0, 0, 1,
		  	   	  1, 0, 0, 1, 0, 0, 1, 4, 4, 4, 1, 0, 0, 1, 4, 4, 1, 0, 0, 1,
		  	   	  1, 2, 2, 1, 0, 0, 1, 4, 4, 4, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1,
		  	   	  1, 1, 1, 5, 0, 0, 1, 4, 4, 4, 1, 0, 0, 0, 0, 5, 0, 0, 0, 1,
		  	   	  1, 0, 3, 0, 0, 0, 1, 4, 4, 4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 1,
		  	   	  1, 0, 3, 0, 0, 0, 1, 4, 4, 4, 4, 1, 0, 0, 0, 0, 0, 0, 1, 1,
		  	   	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4];
let trackGrid = [];
let trackSize = 0;

const getTrackSize = function () {
	trackSize = canvas.width / TRACK_COLUMNS;
};

const drawTrack = function () {
	track.forEach(function (track, index) {
		const column = index % TRACK_COLUMNS;
		const row = Math.floor(index / TRACK_COLUMNS);
		canvasContext.drawImage(trackImages[track], trackSize * column, trackSize * row, trackSize, trackSize);
	});
};

const getIndexForColumnAndRow = function (column, row) {
	// make sure column/row are within bounds
	if (column >= 0 && column < TRACK_COLUMNS && row >= 0 && row < TRACK_ROWS) {
		return column + TRACK_COLUMNS * row;
	} else {
		return -1;
	}
};