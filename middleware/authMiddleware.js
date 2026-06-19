const jwt = require("jsonwebtoken");

// Middleware to verify JWT token
const authMiddleware = (req, res, next) => {
  try {
    // Check if Authorization header exists
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Access denied: No token provided" });
    }

    // Extract token from header
    const token = authHeader.split(" ")[1];

    // Verify token using secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach decoded user info to request
    req.user = decoded;

    // Proceed to next middleware or route
    next();
  } catch (error) {
    console.error("JWT verification error:", error.message);
    return res.status(403).json({ message: "Invalid Token" });
  }
};

module.exports = authMiddleware;
