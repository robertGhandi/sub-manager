// netlify/functions/app.js
const serverlessExpress = require("@vendia/serverless-express");
const connectToDatabase = require("../../src/database");
const app = require("../../src/app");

let handler;

exports.handler = async (event, context) => {
    // Establish database connection
    try {
        await connectToDatabase();
    } catch (error) {
        console.error("Database connection error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Failed to connect to the database", error: error.message }),
        };
    }

    // Initialize serverless handler if not already initialized
    if (!handler) {
        handler = serverlessExpress({ app });
    }

    // Handle the request
    return handler(event, context);
};
