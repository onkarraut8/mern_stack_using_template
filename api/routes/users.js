var express = require('express');
var router = express.Router();

const database = {
  users1: [  
  {  
  id:'123',  
  name:'John',  
  email:'john@gmail.com',  
  password:'abc'  
  },  
  {  
  id:'124',  
  name:'John1',  
  email:'john1@gmail.com',  
  password:'abcd'  
  }  
  ]  
  };

  
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(database.users1);
});

module.exports = router;
