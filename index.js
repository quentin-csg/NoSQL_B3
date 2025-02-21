const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./mongodb');
const routes = require('./routes');

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});