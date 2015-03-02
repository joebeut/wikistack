var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Browse My WikiStack', name: 'WikiStack', link: "Add Page", index_list: ["Fullstack Home", "About Me", "My Projects", "My City", "Code I've Written"], footer: "WikiStack, Fullstack Academy" });
});

module.exports = router;
