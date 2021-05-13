import express from "express";
import process from 'process';
import Manager from '../models/manager.mjs';
const router = express.Router();

// start the effect manager
let manager = new Manager();

router.get('/restart', () => {
	process.exit();
});

router.get("/fx/:effect/:action", function(req, res, next) {
	// make sure the effect can be found
	if (manager.effects[req.params.effect] === undefined) {
		res.status(404).send(`Unable to find the effect "${req.params.effect}"`);
		return;
	}
	// make sure the action can be found
	if (manager.effects[req.params.effect][req.params.action] === undefined) {
		res.status(404).send(`Action not found for the effect "${req.params.action}"`);
		return;
	}

	try {
		manager.effects[req.params.effect][req.params.action]();
		res.status(200).send('success');
	} catch (e) {
		console.log(e);
		res.status(500).send(e);
	}

});

export default router;
