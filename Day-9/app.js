var express = require('express');
var app = express();
var ruleRoutes = require('./routes/Rules.js');
app.use('/', ruleRoutes);
app.listen(8080);
