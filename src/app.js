const path = require('path');
const express = require('express');
const app = express();

// Set the path to your views directory
const publicDirectoryPath = path.join(__dirname, '../paths/views');

// Set the view engine to Handlebars (hbs)
app.set('view engine', 'hbs');

// Serve static files from the public directory
app.use(express.static(publicDirectoryPath));

// Define routes
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Weather Assistant'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Weather Predictor'
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'This is some helpful text.'
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});
