const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
app.use(cors());

app.use(morgan('dev'));

app.get('/api', (req, res) => {
  return res.sendFile(__dirname + '/index.html');
});

app.listen(3020, () => {
  console.log('Server is running!');
});
