import express from "express";
import cors from "cors";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
import connectDB from "./src/config/mongo.config.js";
import urlSchema from "./src/models/shortUrl.model.js";

dotenv.config({ path: './.env' });

const app = express();

// Middleware
app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create short URL
app.post("/api/create", async (req, res) => {
    try {
        let { url } = req.body;
        if (!url) {
            return res.status(400).json({ message: "URL is required" });
        }

        //* ✅ Add "https://" if not present

        if (!/^https?:\/\//i.test(url)) {
            url = `https://${url}`;
        }

        const shortUrl = nanoid(8);
        const newUrl = new urlSchema({
            originalUrl: url,
            shortUrl
        });

        await newUrl.save();
        res.status(201).json({ shortUrl });
    } catch (error) {
        console.error("Error creating short URL:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Redirect short URL
app.get("/:shortUrl", async (req, res) => {
    try {
        const { shortUrl } = req.params;
        const url = await urlSchema.findOne({ shortUrl });

        if (url) {
            url.clicks += 1;
            await url.save();
            res.redirect(url.originalUrl);
        } else {
            res.status(404).json({ message: "URL not found" });
        }
    } catch (error) {
        console.error("Error handling redirect:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Start server after connecting to DB
const startServer = async () => {
    try {
        await connectDB();
        app.listen(3000, () => {
            console.log("Server is running on http://localhost:3000");
        });
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        process.exit(1);
    }
};

startServer();
