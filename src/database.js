// src/database.js
require("dotenv").config();
const mongoose = require("mongoose");

let isConnected = false;

const connectToDatabase = async () => {
    if (isConnected) {
        console.log("=> Using existing database connection");
        return;
    }

    console.log("=> Connecting to database...");
    try {
        const db = await mongoose.connect(process.env.MONGODB_URL) 
        isConnected = db.connections.readyState === 1;
        console.log("=> Database connected");
    } catch (error) {
        console.error("=> Database connection failed:", error);
        throw new Error("Database connection failed");
    }
};

module.exports = connectToDatabase;
