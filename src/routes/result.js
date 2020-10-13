var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    
  let search = ""
  if(typeof req.query.search != 'undefined'){
    search = req.query.search;
  }
  
  // Begin XSS protection

  // End XSS protection

  res.send(`Your search - ${search} - did not match any documents.`);
});

module.exports = router; 
