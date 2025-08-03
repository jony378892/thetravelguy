// controllers/travelController.js
import Travel from "../models/travel.model.js";

export const getAllTravel = async (req, res) => {
  try {
    const data = await Travel.find({});
    if (!data || data.length === 0) {
      return res.json({ success: false, message: "No travel data found" });
    }
    return res.json(data);
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
