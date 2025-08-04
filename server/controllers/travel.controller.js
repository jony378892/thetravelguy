// controllers/travelController.js
import Travel from "../models/travel.model.js";

export const getAllTravel = async (req, res) => {
  try {
    const data = await Travel.find({});
    if (!data) {
      return res.json({ success: false, message: "No travel data found" });
    }
    return res.json(data);
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const getDestination = async (req, res) => {
  try {
    const country = await req.params.country;
    const destination = await Travel.findOne({ country });
    if (destination) {
      res.json(destination);
    } else {
      res.json({ success: false, message: "No data found" });
    }
  } catch (error) {}
};
