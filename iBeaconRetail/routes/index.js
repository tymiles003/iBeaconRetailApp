var express = require('express');
var router = express.Router();

/* GET main page */
router.get('/', function(req, res){
	res.render('index', {title : 'iBeacon'});
});

module.exports = router;