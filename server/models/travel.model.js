import mongoose from "mongoose";

const travelSchema = new mongoose.Schema(
  {
    image: String,
    title: String,
    country: String,
    description: {
      safety: String,
      travel_guide: String,
      local_food: String,
      language_tip: String,
      currency_info: String,
    },
    experience: String,
  },
  {
    collection: "travel",
  }
);

const Travel = mongoose.models.Travel || mongoose.model("Travel", travelSchema);

export default Travel;
