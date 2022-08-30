import mongoose from "mongoose";

const {Schema} = mongoose;

const photoSchema = new Schema({
    title: String,
    description: String,
    filename: String,
    views: {type: Number, default: 0},
});

const Photo = mongoose.model("Photo", photoSchema);

export default Photo;