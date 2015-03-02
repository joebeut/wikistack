var express = require('express');
var router = express.Router();
var model = require('../models');

var docs;
var doc;

model.Page.find('pages', function(err, data) {
	docs = data;
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Browse My WikiStack', name: 'WikiStack', link: "Add Page", docs: docs, footer: "WikiStack, Fullstack Academy" });
});

router.get('/wiki/:url_name', function(req, res) {
	var url = req.params.url_name;

	console.log('This is docs: ' + docs);

	var mystring = JSON.stringify(docs);

	var mydocs = JSON.parse(mystring);

	console.log(mydocs);

	for(doc in mydocs){
		console.log("Doc title: " + doc.body);
		for(var key in doc) {
			var value = doc[key];
			console.log("Key values: " + value);
		}
		
	}


	
  	
  	res.render( 'wiki', { title: doc, body: doc, name: 'WikiStack', link: "Add Page", footer: "WikiStack, Fullstack Academy"});
});

module.exports = router;
