'use strict'

const mongoose = require('mongoose');

const tournamentSchema = mongoose.Schema({
    name: String,
    description: String,
    user: {type: mongoose.Schema.ObjectId, ref: 'User'},
    journeys: [{journey:{type: mongoose.Schema.ObjectId, ref: 'Journey'}}],
    teams: [ {team:{type: mongoose.Schema.ObjectId, ref: 'Team'}}] 
});

module.exports = mongoose.model('Tournament', tournamentSchema);