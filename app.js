const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/players", require("./routes/playerRoutes"));
app.use("/api/teams", require("./routes/teamRoutes"));
app.use("/api/matches", require("./routes/matchRoutes"));

// Default route
app.get("/", (req, res) => {
  res.send("Sports Statistics Platform API is running...");
});

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
