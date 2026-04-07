const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).send({
      message: "Access denied. No token provided."
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY);

    // Attach full decoded payload to request
    // It must contain: _id and role
    req.user = decoded;

    next();
  } catch (err) {
    return res.status(400).send({
      message: "Invalid or expired token."
    });
  }
};