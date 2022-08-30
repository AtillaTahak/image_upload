import mongoose from "mongoose";

const conn = () => {
    mongoose
        .connect(process.env.DB_URI, {
            dbName: process.env.DB_NAME,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("DB connected");
        })
        .catch(err => {
            console.log(err);
        });
}

export default conn;