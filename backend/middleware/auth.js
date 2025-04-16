const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");
  if (!token)
    return res.status(401).send({ message: "Access denied. No token provided." });

  try {
    const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).send({ message: "Invalid token." });
  }
};
// This middleware function checks for the presence of a JWT token in the request header. If the token is not present, it sends a 401 status response indicating that access is denied. If the token is present, it verifies the token using a secret key and attaches the decoded user information to the request object before calling the next middleware or route handler.
// This allows the application to authenticate users and protect routes that require authentication.
