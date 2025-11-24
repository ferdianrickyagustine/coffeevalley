const Model = require("../models/model");

class DistributorController {
    static async getAll(req, res, next) {
        try {
            const distributors = await Model.getAllDistributors();
            res.status(200).json(distributors);
        } catch (error) {
            next(error);
        }
    }

    static async getById(req, res, next) {
        try {
            const { id } = req.params;
            const distributor = await Model.getDistributorById(id);
            
            if (!distributor) {
                return res.status(404).json({ message: "Distributor not found" });
            }
            
            res.status(200).json(distributor);
        } catch (error) {
            next(error);
        }
    }

    static async create(req, res, next) {
        try {
            const { name, city, state, country, phone, email } = req.body;
            
            if (!name || !city || !country || !phone || !email) {
                return res.status(400).json({ 
                    message: "name, city, country, phone, and email are required" 
                });
            }
            
            const distributor = await Model.createDistributor({ 
                name, city, state, country, phone, email 
            });
            
            res.status(201).json(distributor);
        } catch (error) {
            next(error);
        }
    }

    static async update(req, res, next) {
        try {
            const { id } = req.params;
            const { name, city, state, country, phone, email } = req.body;
            
            if (!name || !city || !country || !phone || !email) {
                return res.status(400).json({ 
                    message: "name, city, country, phone, and email are required" 
                });
            }
            
            const distributor = await Model.updateDistributor(id, { 
                name, city, state, country, phone, email 
            });
            
            if (!distributor) {
                return res.status(404).json({ message: "Distributor not found" });
            }
            
            res.status(200).json(distributor);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = DistributorController;
