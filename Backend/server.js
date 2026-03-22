const express = require('express');
const {connectDB} = require('./database/db')
require('dotenv').config();
const clientRoutes = require('./Routes/client_routes');
const taskRoutes = require('./Routes/task_routes');

const app = express();

app.use(express.json());

connectDB();

app.use('/api/clients', clientRoutes);
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Sever is listening on port ${PORT}`);
})