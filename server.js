const express = require('express');
const app = express();
const path = require('path');
var about = require('./routes/about');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public'),{extensions:["html"]}));
app.get('/', (req, res) => {
  res.render('index.html');
});

app.get('/about', (req, res) => {
  res.render('about.html');
});

app.get('/contact', (req, res) => {
  res.render('contact.html');
});

app.get('/home', (req, res) => {
  res.render('index.html');
});

app.get('/coursessec', (req, res) => {
  res.render('cource.html');
});

app.get('/blog', (req, res) => {
  res.render('blog.html');
});

app.get('/blog', (req, res) => {
  res.render('blog.html');
});

app.get('/webdev', (req, res) => {
  res.render('webdev.html');
});


// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

