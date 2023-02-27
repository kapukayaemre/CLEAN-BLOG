const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');
const Blog = require('./models/Blog');

const app = express();

//! Connect DB
mongoose.connect('mongodb://127.0.0.1:27017/blog-db');

//! Template Engine
app.set('view engine', 'ejs');

//! Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//! Routes
app.get('/', async (req, res) => {
  const blogs = await Blog.find({});
  res.render('index', {
    blogs,
  });
});

app.get('/blogs/:id', async (req, res) => {
  //console.log(req.params.id);
  const blog = await Blog.findById(req.params.id);
  res.render('blog', {
    blog,
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add_post', (req, res) => {
  res.render('add_post');
});

app.post('/blogs', async (req, res) => {
  await Blog.create(req.body);
  res.redirect('/');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı...`);
});
