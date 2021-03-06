const express = require('express');
const app = express();
const path = require('path');
const apiRouter = require('./routes/api')

app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.use('/api', apiRouter);

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.use('*', (req, res) => {
  res.sendStatus(404);
});

app.listen(3000); //listens on port 3000 -> http://localhost:3000/
console.log('listening on port 3000')