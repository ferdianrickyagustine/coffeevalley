const Model = require("../models/model");

class UserController {
    static async login(req, res, next) {
        try {
            const { userId, password } = req.body;
            
            if (!userId || !password) {
                throw { name: "BadRequest", message: "userId and password are required" };
            }

            const user = await Model.login({ userId, password });
            
            req.session.userDbId = user.id;
            req.session.userId = user.userId;
            
            res.status(200).json({ 
                message: "Login successful",
                user: {
                    id: user.id,
                    userId: user.userId
                }
            });
        } catch (error) {
            next(error);
        }
    }

    static async logout(req, res, next) {
        try {
            req.session.destroy((err) => {
                if (err) {
                    return next(err);
                }
                res.status(200).json({ message: "Logout successful" });
            });
            console.log("Logout successful")

        } catch (error) {
            next(error);
        }
    }
}

module.exports = UserController;
