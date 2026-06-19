const Player = require("../models/playerModel");

// Create Player
exports.createPlayer = async (req, res) => {
  try {
    const player = await Player.create(req.body);
    res.status(201).json({ success: true, data: player });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get All Players
exports.getPlayers = async (req, res) => {
  try {
    const players = await Player.find().populate("team");
    res.status(200).json({ success: true, data: players });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get Player by ID
exports.getPlayerById = async (req, res) => {
  try {
    const player = await Player.findById(req.params.id).populate("team");
    if (!player) return res.status(404).json({ message: "Player not found" });
    res.status(200).json({ success: true, data: player });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update Player
exports.updatePlayer = async (req, res) => {
  try {
    const player = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!player) return res.status(404).json({ message: "Player not found" });
    res.status(200).json({ success: true, data: player });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete Player
exports.deletePlayer = async (req, res) => {
  try {
    const player = await Player.findByIdAndDelete(req.params.id);
    if (!player) return res.status(404).json({ message: "Player not found" });
    res.status(200).json({ success: true, message: "Player deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
