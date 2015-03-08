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

	model.Page.findOne({url_name: url}, function (err, data){
        res.render( 'wiki', { title: data.title, body: data.body, name: 'WikiStack', link: "Add Page", footer: "WikiStack, Fullstack Academy"});
	  });
});

module.exports = router;
