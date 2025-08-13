import mongoose from "mongoose";

const instagramSchema = new mongoose.Schema({
  image: String,
});

const Instagram =
  mongoose.models.Instagram || mongoose.model("Instagram", instagramSchema);
export default Instagram;
