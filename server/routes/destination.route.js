import express from "express";
import {
  getAllDestinations,
  getDestination,
} from "../controllers/destination.controller.js";

const router = express.Router();

router.get("/destinations", getAllDestinations);
router.get("/destination/:country", getDestination);

export default router;
