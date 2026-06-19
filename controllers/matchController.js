const Match = require("../models/matchModel");

// Create Match
exports.createMatch = async (req, res) => {
  try {
    const match = await Match.create(req.body);
    res.status(201).json({ success: true, data: match });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get All Matches
exports.getMatches = async (req, res) => {
  try {
    const matches = await Match.find().populate("teams");
    res.status(200).json({ success: true, data: matches });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get Match by ID
exports.getMatchById = async (req, res) => {
  try {
    const match = await Match.findById(req.params.id).populate("teams");
    if (!match) return res.status(404).json({ message: "Match not found" });
    res.status(200).json({ success: true, data: match });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update Match
exports.updateMatch = async (req, res) => {
  try {
    const match = await Match.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!match) return res.status(404).json({ message: "Match not found" });
    res.status(200).json({ success: true, data: match });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete Match
exports.deleteMatch = async (req, res) => {
  try {
    const match = await Match.findByIdAndDelete(req.params.id);
    if (!match) return res.status(404).json({ message: "Match not found" });
    res.status(200).json({ success: true, message: "Match deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
