const express = require('express');
const path = require("path");
const port = 3000;

var app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "/public")));

app.get('/', function(req, res) {
  res.render('home.ejs')})

app.get('/events', function(req, res) {
  res.render('events.ejs')})

app.get('/services', function(req, res) {
  res.render('services.ejs')})

app.get('/contact', function(req, res) {
  res.render('contact.ejs')})

app.get('/about', function(req, res) {
  res.render('about.ejs')})

app.get('/gallery', function(req, res) {
  res.render('gallery.ejs')})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}` );
});