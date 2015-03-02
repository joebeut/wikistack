var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('add', { title: 'Add A Page', name: 'WikiStack', link: "Add Page", footer: "WikiStack, Fullstack Academy" });
});

router.post('/submit', function(req, res) {
  // this is the /add/submit route
});

module.exports = router;
