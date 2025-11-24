const Model = require("../models/model");

class BeanController {
    static async getAll(req, res, next) {
        try {
            const beans = await Model.getAllBeans();
            res.status(200).json(beans);
        } catch (error) {
            next(error);
        }
    }

    static async getById(req, res, next) {
        try {
            const { id } = req.params;
            const bean = await Model.getBeanById(id);
            
            if (!bean) {
                throw { name: "NotFound", message: "Bean not found" };
            }
            
            res.status(200).json(bean);
        } catch (error) {
            next(error);
        }
    }

    static async getBeanOfTheDay(req, res, next) {
        try {
            const bean = await Model.getBeanOfTheDay();
            
            if (!bean) {
                throw { name: "NotFound", message: "No bean of the day available" };
            }
            
            res.status(200).json(bean);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = BeanController;
