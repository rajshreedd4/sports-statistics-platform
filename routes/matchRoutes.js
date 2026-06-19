const express = require("express");
const router = express.Router();
const {
  createMatch,
  getMatches,
  getMatchById,
  updateMatch,
  deleteMatch,
} = require("../controllers/matchController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, createMatch);
router.get("/", authMiddleware, getMatches);
router.get("/:id", authMiddleware, getMatchById);
router.put("/:id", authMiddleware, updateMatch);
router.delete("/:id", authMiddleware, deleteMatch);

module.exports = router;
