const Model = require("../models/model");

class UploadController {
    static async create(req, res, next) {
        try {
            const { title, author } = req.body;
            
            if (!title || !author) {
                return res.status(400).json({ 
                    message: "title and author are required" 
                });
            }
            
            if (!req.file) {
                return res.status(400).json({ message: "Document file is required" });
            }
            
            const document = req.file.filename;
            
            const upload = await Model.createUpload({ title, document, author });
            
            res.status(201).json(upload);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = UploadController;
