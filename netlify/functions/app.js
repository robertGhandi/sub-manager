// netlify/functions/app.js
import serverlessExpress from "@vendia/serverless-express";
import connectToDatabase from "../../src/database";
import app from "../../src/app";

let handler;

const _handler = async (event, context) => {
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
    console.log("Incoming event:", JSON.stringify(event, null, 2));
    // Handle the request
    return handler(event, context);
};
export { _handler as handler };
