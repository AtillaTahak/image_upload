import Photo from "../models/photoModel.js";

function createPhoto(req, res){

    console.log(req.body);
    const photo = Photo.create(req.body);
    res.status(201).json({
        message: "Photo uploaded successfully",
        photo,
    });
}

export {createPhoto}; 