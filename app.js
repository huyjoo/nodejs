const express = require('express')
const app = express();
const path = require('path');
const hbs  = require('express-handlebars');
const morgan = require('morgan')
const port = 3000

app.use(morgan('combined'))

 app.use(express.static('./public'));
//app.use(express.static(path.join(__dirname,'public')));
 //app.use(express.static(__dirname + '/public'));

//Template engine
app.engine('handlebars', hbs.engine());
app.set('view engine', 'handlebars');

app.set('views', path.join(__dirname,  'resources', 'views'));

app.get('/', (req, res) => {
  res.render('home');
});


app.get('/news', (req, res) => {
  res.render('news');
});

app.get('/hello', (req, res) => {
  res.render('hello');
});

app.get('/search', (req, res) => {
  console.log(req.query.q);
  res.render('search');
});

app.get('/', (req, res) => {
  res.render('header');
});

app.get('/', (req, res) => {
  res.render('tooter');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})