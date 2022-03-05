'use strict';

let mongodb = require('mongodb');
let mongoose = require('mongoose');

module.exports = function (app) {

  let uri = "mongodb+srv://timbuktujoe:" + process.env.PW + "@cluster0.78rn7.mongodb.net/anonymous_message_board?retryWrites=true&w=majority"
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  app.route('/api/threads/:board');

  app.route('/api/replies/:board');

};
