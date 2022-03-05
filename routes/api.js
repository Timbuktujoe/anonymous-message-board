'use strict';

let mongodb = require('mongodb');
let mongoose = require('mongoose');

module.exports = function (app) {

  let uri = 'mongodb+srv://timbuktujoe:' + process.env.PW + '@cluster0.78rn7.mongodb.net/anonymous_message_board?retryWrites=true&w=majority'
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  let replySchema = new mongoose.Schema({
    text: { type: String, required: true },
    delete_password: { type: String, required: true },
    createdon_: { type: Date, required: true },
    reported: { type: Boolean, required: true }
  })

  let threadSchema = new mongoose.Schema({
    text: { type: String, required: true },
    delete_password: { type: String, required: true },
    board: { type: String, required: true },
    createdon_: { type: Date, required: true },
    bumpedon_: { type: Date, required: true },
    reported: { type: Boolean, required: true },
    replies: { replySchema }
  })

  app.route('/api/threads/:board');

  app.route('/api/replies/:board');

};
