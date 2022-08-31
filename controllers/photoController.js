import Photo from "../models/photoModel.js";

async function createPhoto(req, res){
    try {
        const { title, description, filename } = req.body;
        const photo = await Photo.create({
            title,
            description,
            filename
        });
        res.status(201).json({
            message: "Photo uploaded successfully",
            photo,
        });
        
    } catch (error) {
        res.status(500).json({
            message: "Error uploading photo",
            error
        });
    }

}

export {createPhoto}; 