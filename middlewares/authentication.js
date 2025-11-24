const authentication = (req, res, next) => {
    
    if (!req.session.userId) {
        return next({ name: "Unauthorized", message: "Please login first" });
    }
    next();
};

module.exports = authentication;
