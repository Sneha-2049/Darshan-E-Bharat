module.exports = (requiredRole) => {
  return (req, res, next) => {

    // If user not attached (auth middleware missing)
    if (!req.user) {
      return res.status(401).send({
        message: "Unauthorized. Please login first."
      });
    }

    // If role not matching
    if (req.user.role !== requiredRole) {
      return res.status(403).send({
        message: `Access denied. ${requiredRole} role required.`
      });
    }

    next();
  };
};