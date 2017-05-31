const DRIVE_POWER = 0.4;
const REVERSE_POWER = 0.2;
const DECAY_MULTIPLYER = 0.94;
const TURN_SPEED = 0.08;

const Car = function () {
	this.x = 0;
	this.y = 0;
	this.speed = 0;
	this.angle = 0;
	this.image = null;
	this.name = 'Car';

	this.gasHeld = false;
	this.reverseHeld = false;
	this.leftHeld = false;
	this.rightHeld = false;

	this.upKey = null;
	this.rightKey = null;
	this.downKey = null;
	this.leftKey = null;

	this.reset = function (image, name, upKey, rightKey, downKey, leftKey) {
		this.name = name;
		this.image = image;
		this.speed = 0;

		track.some(function (tile, index) {
			const column = index % TRACK_COLUMNS;
			const row = Math.floor(index / TRACK_COLUMNS);
			
			if (tile === TRACK_CODES.PLAYERSTART) {
				track[index] = TRACK_CODES.ROAD;
				this.angle = -Math.PI / 2;
				this.x = column * trackSize + trackSize / 2;
				this.y = row * trackSize + trackSize / 2;
				return true;
			}
		}.bind(this));

		this.upKey = upKey;
		this.rightKey = rightKey;
		this.downKey = downKey;
		this.leftKey = leftKey;
	};

	this.draw = function () {
		createRotatingImage(this.image, this.x, this.y, this.angle);
	};

	this.move = function () {
		this.speed *= 0.97; // degrade speed due to friction

		if (this.gasHeld) {
			this.speed += DRIVE_POWER;
		}
		if (this.reverseHeld) {
			this.speed -= REVERSE_POWER;
		}
		if (Math.abs(this.speed) > DRIVE_POWER) {
			if (this.leftHeld) {
				this.angle -= this.speed > 0 ? TURN_SPEED : -TURN_SPEED;
			}
			if (this.rightHeld) {
				this.angle += this.speed > 0 ? TURN_SPEED : -TURN_SPEED;
			}
		}

		this.x += Math.cos(this.angle) * this.speed;
		this.y += Math.sin(this.angle) * this.speed;

		this.checkCollision();
	};

	this.checkCollision = function () {
		const carColumn = Math.floor(this.x / trackSize);
		const carRow = Math.floor(this.y / trackSize);
		const trackIndex = getIndexForColumnAndRow(carColumn, carRow);
		const trackType = track[trackIndex] !== undefined ? track[trackIndex] : TRACK_CODES.WALL;
		switch (trackType) {
		case TRACK_CODES.FINISH:
			winner = this;
			break;
		case TRACK_CODES.ROAD:
			break;
		default:
			// Undo the last movement so the car doesn't get stuck
			this.x -= Math.cos(this.angle) * this.speed;
			this.y -= Math.sin(this.angle) * this.speed;
			// Bump the car away from the wall
			this.speed *= -0.5;
			break;
		};
	};

	this.updateKeys = function (event, value) {
		switch (event.keyCode) {
		case this.leftKey:
			event.preventDefault();
			this.leftHeld = value;
			break;
		case this.rightKey:
			event.preventDefault();
			this.rightHeld = value;
			break;
		case this.upKey:
			event.preventDefault();
			this.gasHeld = value;
			break;
		case this.downKey:
			event.preventDefault();
			this.reverseHeld = value;
			break;
		default:
			break;
		};
	};
};
