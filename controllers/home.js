/**
 * Home
 */
var input = require('../system/helpers/input'),
    date  = require('../system/helpers/date'),
    users = require('../models/users');

module.exports = {
  index: function(params)
  {
    if (input.isPost()) {
      if (!input.has('password')) {
        console.log('Falta el password');
      }

      users.save(input.all());
    }

    global.res.render('home/index');
  }
};