var express = require('express');
var router = express.Router();
var page = require('../models');

var docs;

page.Page.find('pages', function(err, data) {
	docs = data;
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Browse My WikiStack', name: 'WikiStack', link: "Add Page", docs: docs, footer: "WikiStack, Fullstack Academy" });
});

module.exports = router;
