import Instagram from "../models/instagram.model.js";

export const getInstagramImages = async (req, res) => {
  try {
    const data = await Instagram.find();
    if (!data) {
      return res.json({ success: false, message: error.message });
    }
    return res.json(data);
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
