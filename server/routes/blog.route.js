import express from "express";
import { getAllBlogs, getBlog } from "../controllers/blog.controller.js";

const router = express.Router();

router.get("/blogs", getAllBlogs);
router.get("/blog/:slug", getBlog);

export default router;
