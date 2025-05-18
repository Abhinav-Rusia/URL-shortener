import express from "express";
import { createShortUrl, redirectShortUrl } from "../controllers/shortUrl.controller.js";

const router = express.Router();

router.post("/", createShortUrl);          // POST /api/create
router.get("/:shortUrl", redirectShortUrl); // GET //:shortUrl

export default router;
