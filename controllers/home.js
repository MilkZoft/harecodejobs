/**
 * Home
 */
var input = require('../system/helpers/input'),
    date  = require('../system/helpers/date'),
    users = require('../models/users');

module.exports = {
  index: function(params)
  {
    global.res.render('home/index', {title: 'CodeJobs', name: 'Carlos'});
  }
};