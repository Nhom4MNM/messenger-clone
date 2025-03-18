require('dotenv').config();
const express = require('express'); //commonjs
const path = require('path'); //commonjs
const configViewEngine = require('./config/viewEngine')
const webRoute = require('./routes/web')
const connection = require('./config/database')
const mongoose = require('mongoose')
const app = express(); //app express
const Kitten = require('./models/Kitten')



const port = process.env.PORT //port
const hostname = process.env.HOST_NAME

// config template engine
configViewEngine(app);


connection();


//khai bao router
app.use('/', webRoute);

const silence = new Kitten({ name: 'Viet' });
silence.save();


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})