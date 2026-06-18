const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: true
    },

    coach: String,

    captain: String
});

module.exports = mongoose.model("Team", teamSchema);