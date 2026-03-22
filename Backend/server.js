const express = require('express');
const {connectDB} = require('./database/db')
require('dotenv').config();

const app = express();

app.use(express.json());

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Sever is listening on port ${PORT}`);
})