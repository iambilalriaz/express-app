const express = require('express');
import cors from 'cors';
import morgan from 'morgan';
const app = express();
app.use(cors());

app.use(morgan('dev'));

app.get('/', (req, res) => {
  return res.json({ message: 'API is working fine.' });
});

app.listen(3020, () => {
  console.log('Server is running!');
});
