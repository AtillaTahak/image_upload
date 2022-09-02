import express from 'express'
import dotenv from 'dotenv'
import conn from './db.js'
import pageRouter from './routes/pageRoute.js'
import photoRouter from './routes/photoRoute.js'
import fileUpload from 'express-fileupload'
import pkg from 'cloudinary';




dotenv.config();
pkg.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

// connection to DB
conn();
const app = express();
const port = process.env.PORT;
//ejs template engine
app.set('view engine', 'ejs');

//Static files are served from the public folder
app.use(express.json())
app.use(fileUpload({useTempFiles:true}))

app.use(express.static('public'));
//app.use(express.urlencoded({ extended: true }));
app.use('/', pageRouter);
app.use('/photos', photoRouter);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));