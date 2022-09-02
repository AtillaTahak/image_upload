import Photo from "../models/photoModel.js";
import pkg from 'cloudinary';


async function getPhoto(req, res) {
    res.render('photos', { photo: req.photo });
}

async function createPhoto(req, res) {
    try {
        const result = await pkg.uploader.upload(
            req.files.image.tempFilePath, {
            user_filename: true,
            folder: "image_uploader",
        });

        const { title, description } = req.body;
        const photo = await Photo.create({
            title,
            description,
            filename:result.secure_url,
        });
        console.log(photo);
        res.status(200).render('photo', { photo });

    } catch (error) {
        res.status(500).json({
            message: "Error uploading photo",
            error
        });
    }

}

export { createPhoto, getPhoto }; 