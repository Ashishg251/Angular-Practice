var express = require('express');
var router = express.Router();
var Rules = require('../database/dbConnection').RulesModel;

router.get('/RulesData', function(req, res, next) {
  Rules.find(function(err, result){
    console.log(result);
    res.json(result);
  })
});

module.exports = router;
