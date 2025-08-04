import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

import blogRouter from "./routes/blog.route.js";
import travelRouter from "./routes/travel.route.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectDB();

app.use("/api", blogRouter);
app.use("/api", travelRouter);

app.use("/", (req, res) => {
  res.send("No page found");
});

app.listen(port, () => {
  console.log("Server is running on port: 3000");
});
