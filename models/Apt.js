// Subdocument schema for votes

// Subdocument schema for poll choices

var mongoose = require('mongoose');


// Document schema for polls
exports.AptSchema = new mongoose.Schema({
    rooms: {type: Number, required: true},
    price: {type: Number, required: true},
    address: {type: String, required: true},
    author: {type: String, required: true},
    link: { type: String, required: true },
    msg: { type: String },
    created: { type: String, required: true }
});


// Subdocument schema for votes
var voteSchema = new mongoose.Schema({ ip: 'String' });

// Subdocument schema for poll choices
var choiceSchema = new mongoose.Schema({
    text: String,
    votes: [voteSchema]
});

// Document schema for polls
//exports.AptSchema = new mongoose.Schema({
//    question: { type: String, required: true },
//    choices: [choiceSchema]
//});