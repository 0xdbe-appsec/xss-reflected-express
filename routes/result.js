var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    
  let search = ""
  if(typeof req.query.search != 'undefined'){
    search = req.query.search;
  }
    
  res.send(`Your search - <b> ${search} </b> - did not match any documents.`);
});

module.exports = router; 
