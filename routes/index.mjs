import express from 'express';
import config from '../config.json';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'Mulberry Model Railroad',
  	config: config,
  });
});

export default router;
