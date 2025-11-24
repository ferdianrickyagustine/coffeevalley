const authentication = (req, res, next) => {
    if (!req.session.userId) {
        throw { name: "Unauthorized", message: "Please login first" };
    }
    next();
};

module.exports = authentication;
