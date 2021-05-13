import config from '../config.json';
import fx from './fx.mjs';

class Manager {
	constructor() {
		this.effects = {};
		// read in the config file and create the sound effects
		config.forEach(sound => {
			this.effects[sound.name] = new fx(sound.location);
		});
	}
}

export default Manager;