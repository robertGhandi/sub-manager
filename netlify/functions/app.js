const serverlessExpress = require("@vendia/serverless-express");
const app = require("../../src/app");

// Create the serverlessExpress handler
const handler = serverlessExpress({ app });

// Wrap the handler in an async function for enhanced flexibility
exports.handler = async (event, context) => {
    try {
        // Optional: Log the incoming event for debugging
        console.log("Incoming event:", JSON.stringify(event));

        // Call the serverlessExpress handler and wait for its response
        const response = await handler(event, context);

        // Optional: Log the response for debugging
        console.log("Handler response:", JSON.stringify(response));

        return response;
    } catch (error) {
        // Log any errors that occur during processing
        console.error("Error occurred:", error);

        // Return an error response
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: "Internal Server Error",
                error: process.env.NODE_ENV === "development" ? error.message : "An unexpected error occurred",
            }),
        };
    }
};
