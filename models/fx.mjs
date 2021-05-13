import play from '../utilities/sound.mjs';

const STATUS_STOPPED = 'stopped';
const STATUS_PLAYING = 'playing';
const SPEED_1X = '1x';
const SPEED_2X = '2x';
const SPEED_3X = '3x';


class fx {

	constructor(location) {
		this.location = location;
		this.status = STATUS_STOPPED;
	}

	play(loop = false, volume = false, speed) {
		this.status = STATUS_PLAYING;
		this.audio = play(this.location, loop, volume);
	}

	loop() {
		this.play(true);
	}

	speedup() {
		this.audio.incSpeed();
	}

	slowdown() {
		this.audio.decSpeed();
	}

	stop() {
		this.status = STATUS_STOPPED;
		if (this.audio) {
			this.audio.quit();
		}
	}
}

export default fx;