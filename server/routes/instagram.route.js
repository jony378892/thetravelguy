import express from "express";

import { getInstagramImages } from "../controllers/instagram.controller.js";

const router = express.Router();

router.get("/instagram", getInstagramImages);

export default router;
