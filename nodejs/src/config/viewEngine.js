const express = require('express');
const path = require('path')

const configViewEngine = (app) => {
    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'ejs');
    // config static files
    app.use(express.static(path.join('./src', 'public'))); app.use(express.static('public')); 
};

module.exports = configViewEngine;