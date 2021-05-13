import Omx from './omxplayer.mjs';
import Afplayer from './afplayer.mjs';
import minimist from 'minimist';
import path from 'path';

export default (src, loop = false, volume = false) => {
	switch (process.env.environment) {
		case 'mac': {
			// just play a sound to know that it will work
			return Afplayer.play(path.resolve(path.dirname('') + src));
			break;
		}
		default: {
			return  Omx(path.resolve(path.dirname('') + src), 'alsa', loop, volume, true);
			break;
		}
	}
}
