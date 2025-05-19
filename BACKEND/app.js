import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/mongo.config.js";
import shortUrlRoute from "./src/routes/shortUrl.route.js";
import errorHandler from "./src/utils/errorHandler.js";

dotenv.config({ path: './.env' });

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/create", shortUrlRoute);
app.use("/", shortUrlRoute);





// Error handling middleware
app.use(errorHandler)

// Connect to MongoDB
connectDB()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });

// For local development
if (process.env.NODE_ENV !== 'production') {
  app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
}

// Export for Vercel
export default app;
