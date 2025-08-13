// controllers/destinationController.js
import Destination from "../models/destination.model.js";

export const getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find({});
    if (!destinations) {
      return res.json({ success: false, message: "No Destination found" });
    }
    return res.json(destinations);
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const getDestination = async (req, res) => {
  try {
    const country = await req.params.country;
    const destination = await Destination.findOne({ country });
    if (destination) {
      res.json(destination);
    } else {
      res.json({ success: false, message: "No data found" });
    }
  } catch (error) {}
};
