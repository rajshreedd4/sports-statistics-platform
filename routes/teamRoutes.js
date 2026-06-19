const express = require("express");
const router = express.Router();
const {
  createTeam,
  getTeams,
  getTeamById,
  updateTeam,
  deleteTeam,
} = require("../controllers/teamController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, createTeam);
router.get("/", authMiddleware, getTeams);
router.get("/:id", authMiddleware, getTeamById);
router.put("/:id", authMiddleware, updateTeam);
router.delete("/:id", authMiddleware, deleteTeam);

module.exports = router;
