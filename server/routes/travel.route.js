import express from "express";
import {
  getAllTravel,
  getDestination,
} from "../controllers/travel.controller.js";

const router = express.Router();

router.get("/travels", getAllTravel);
router.get("/destination/:country", getDestination);

export default router;
