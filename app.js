import express from 'express'

const app = express();
const port = 3000;
//ejs template engine
app.set('view engine', 'ejs');

//Static files are served from the public folder
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));