const express = require('express');
const app = express();
const mongoose = require('mongoose');
//const bodyParser = require('body-parser');
require('dotenv/config');

app.use(express.json());


//import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);


//ROUTES
app.get('/', (req,res) => {
    res.send('we are on home');
});

//connect to db
mongoose.connect(
    process.env.DB_CONNECTION, {  useNewUrlParser: true },() => 
    console.log('connected toDB')
);

//How to start listening the server
app.listen(3000);



