var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    
  let search = ""
  if(typeof req.query.search != 'undefined'){
    search = req.query.search;
  }
  
  //search = search.replace("<script>", "");
  //search = search.replace(/<script>/g, "");
  //while (search != (search = search.replace(/<script>/g, "")));

  res.send(`Your search - <b> ${search} </b> - did not match any documents.`);
});

module.exports = router; 
