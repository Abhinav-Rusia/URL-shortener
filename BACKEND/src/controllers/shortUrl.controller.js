import urlSchema from "../models/shortUrl.model.js";
import { shortUrlService } from "../services/shortUrl.service.js";

export const createShortUrl = async (req, res) => {
    try {
        let { url } = req.body;

        if (!url) {
            return res.status(400).json({ message: "URL is required" });
        }

        // Ensure URL has protocol
        if (!/^https?:\/\//i.test(url)) {
            url = `https://${url}`;
        }

        // Check if URL already exists
        let existing = await urlSchema.findOne({ originalUrl: url });
        if (existing) {
            return res.status(200).json({
                shortUrl: `${req.protocol}://${req.get("host")}/${existing.shortUrl}`
            });
        }

        // ✅ Call service with URL
        const shortUrl = await shortUrlService(url);

        return res.status(201).json({
            shortUrl: `${req.protocol}://${req.get("host")}/${shortUrl}`
        });

    } catch (error) {
        console.error("Error creating short URL:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};



export const redirectShortUrl = async (req, res) => {
    try {
        const { shortUrl } = req.params;
        const url = await urlSchema.findOne({ shortUrl });

        if (url) {
            url.clicks += 1;
            await url.save();
            return res.redirect(url.originalUrl);
        }

        return res.status(404).json({ message: "Short URL not found" });

    } catch (error) {
        console.error("Error redirecting:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
