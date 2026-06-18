const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
    playerName: {
        type: String,
        required: true
    },

    age: Number,

    country: String,

    runs: {
        type: Number,
        default: 0
    },

    wickets: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("Player", playerSchema);