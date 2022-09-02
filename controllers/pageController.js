import Photo from "../models/photoModel.js";

const getIndexPage = async(req, res) => {
    console.log(res);
    try {
        const photos = await Photo.find();
        res.status(200).render('index', {
            photos
        });
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving photos",
            error
        });
    }}


export { getIndexPage };