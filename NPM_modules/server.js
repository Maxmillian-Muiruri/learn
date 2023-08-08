const http = require('http')
const express = require('express')
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3500;

app.get('^/$|/index(.html)?',(req, res) => {
  // res.sendFile('./server-building/views/index.html', {root: __dirname});
  res.sendFile(path.join(__dirname, 'server-building', 'views', 'index.html'));

})
app.get('^/$|/new-page(.html)?',(req, res) => {
  res.sendFile(path.join(__dirname, 'server-building', 'views', 'new-page.html'));

})
app.get('old-page(.html)?',(req, res) => {
  res.redirect(301, 'new-page.html');

})
 app.get("/*", (req, res ) => {
  res.status(404).sendFile(path.join(__dirname, 'server-building', 'views', '404.html'));

 })

 // Route handlers
app.get('/hello(.html)?', (req, res, next) => {
  console.log('attempted to load hello.html');
  next()
}, (req, res) => {
  res.send('Hello World!');

})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
