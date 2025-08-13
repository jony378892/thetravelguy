import mongoose from "mongoose";

const DestinationSchema = new mongoose.Schema(
  {
    image: String,
    title: String,
    country: String,
    description: {
      safety: String,
      destination_guide: String,
      local_food: String,
      language_tip: String,
      currency_info: String,
    },
    experience: String,
  },
  {
    collection: "destination",
  }
);

const Destination =
  mongoose.models.Destination ||
  mongoose.model("Destination", DestinationSchema);

export default Destination;
