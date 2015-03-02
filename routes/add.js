var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('add', { title: 'Add A Page', name: 'WikiStack', link: "Add Page", footer: "WikiStack, Fullstack Academy" });
});

router.post('/submit', function(req, res) {
  	var models = require('../models/');

  	// STUDENT ASSIGNMENT:
  	// add definitions of the `title`, `body` and `url_name` variables here
	var title = "Page Title";
	var body = "Page Content";

	var generateUrlName = function(name) {
	  	if (typeof title != "undefined" && title !== "") {
	    	// Removes all non-alphanumeric characters from name
	    	// And make spaces underscore
	    	return title.replace(/\s/ig,"_").replace(/\W/ig,"");
	  	} else {
	   	 	// Generates random 5 letter string
	    	return Math.random().toString(36).substring(2,7);
	  	}
	};

	var url_name = generateUrlName();

  	var p = new models.Page({ "title": title, "body": body, "url_name": url_name });
  	p.save();
  	res.redirect('/');
});

module.exports = router;
