const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
    teamA: {
        type: String,
        required: true
    },

    teamB: String,

    venue: String,

    matchDate: Date,

    winner: String
});

module.exports = mongoose.model("Match", matchSchema);