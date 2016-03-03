var mongoose = require('mongoose');
var db = mongoose.createConnection("mongodb://localhost/AngularDatabase");
var rulesSchema = require("./RulesSchema");
console.log(db.model('rulesmodel',rulesSchema));
module.exports = {
  RulesModel : db.model('rulesmodel',rulesSchema)
};
