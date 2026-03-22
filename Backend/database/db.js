const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database Connected!!");
    } catch (error) {
        console.log('Error in db.js file -> ', error);
        process.exit(1);
    }
}

module.exports = {connectDB};