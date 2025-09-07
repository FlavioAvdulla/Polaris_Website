import mongoose from "mongoose";
import { MONGO_URI } from "../constants/env";

/**
 * Establishes a connection to the MongoDB database using Mongoose
 * This function attempts to connect to the database using the connection string
 * provided in the MONGO_URI environment variable
 * 
 * @async
 * @function connectToDatabase
 * @returns {Promise<void>} Returns a promise that resolves when the connection is established
 * @throws {Error} If the connection fails, an error is thrown and the process exits with code 1
 * 
 * @example
 * // Import and use the function
 * import connectToDatabase from './db/connection';
 * 
 * // In your application startup
 * connectToDatabase()
 *   .then(() => {
 *     // Start your server or continue application initialization
 *   })
 *   .catch(error => {
 *     // Handle connection error (though the function already handles it)
 *   });
 */
const connectToDatabase = async () => {
  try {
    console.log("Connecting to DB...");
    
    // Attempt to connect to MongoDB using Mongoose
    // mongoose.connect() returns a promise that resolves when connected
    await mongoose.connect(MONGO_URI);
    
    console.log("Successfully connected to DB!");
  } catch (error) {
    // Log detailed error information if connection fails
    console.error("Could not connect to DB", error);
    
    // Exit the process with failure code if database connection fails
    // This is often appropriate as many applications cannot function without a database
    process.exit(1);
  }
};

export default connectToDatabase;