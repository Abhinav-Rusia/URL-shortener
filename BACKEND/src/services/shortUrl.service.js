import { generateNanoid } from "../utils/helper.js";
import urlSchema from "../models/shortUrl.model.js";

export const shortUrlService = async (url) => {
    const shortUrl = generateNanoid(8);

    const newUrl = new urlSchema({
        originalUrl: url,
        shortUrl,
    });

    await newUrl.save();

    return shortUrl; // just return the short code
};
