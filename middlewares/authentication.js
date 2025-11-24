const authentication = (req, res, next) => {
    console.log('Session check:', req.session);
    console.log('userId in session:', req.session.userId);
    
    if (!req.session.userId) {
        return next({ name: "Unauthorized", message: "Please login first" });
    }
    next();
};

module.exports = authentication;
