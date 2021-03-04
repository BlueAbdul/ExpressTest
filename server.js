const express = require('express');
const app = express();

app.use(express.static(__dirname + '/img'));

app.get('/', (req, res) => {
    res.sendFile('./vues/index.html',  {root: __dirname});
});
app.get('/lake', (req, res) => {
    res.sendFile('./vues/lake.html',  {root: __dirname});
});
app.get('/mongol', (req, res) => {
    res.sendFile('./vues/mongol.html',  {root: __dirname});
});
app.get('/road', (req, res) => {
    res.sendFile('./vues/road.html',  {root: __dirname});
});
app.get('/woods', (req, res) => {
    res.sendFile('./vues/woods.html',  {root: __dirname});
});
app.get('/biglake', (req, res) => {
    res.sendFile('./vues/biglake.html',  {root: __dirname});
});




app.listen('3000');