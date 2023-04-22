var express =require("express");

var products = require('./routes/about');

var app = express();

app.use('about/', about);