var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RulesSchema = new Schema({
  RuleId: Number,
  RuleDescription: String
}, {collection: "Rules"});

module.exports = RulesSchema;
