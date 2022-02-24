const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const seedDB = require('./seed');

mongoose.connect('mongodb://localhost:27017/Blog-app')
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log(err));

// seedDB();   

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))



const blogRoutes = require('./routes/blogRoutes')

app.get('/', (req, res) => {
    res.send('Home Page');
})


app.use(blogRoutes);




app.listen(3000, () => {
    console.log('Server connected at Port 3000');
})