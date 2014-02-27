/*
 * GET home page.
 */
var config = require('../config');


exports.index = function(req, res){
  res.render('index', { app_port: config.app_port, title: 'Random Content Generator'});
};

