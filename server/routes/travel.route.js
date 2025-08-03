import express from "express";
import { getAllTravel } from "../controllers/travel.controller.js";

const router = express.Router();

router.get("/travels", getAllTravel);

export default router;
