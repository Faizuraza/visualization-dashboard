const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const insightRoutes = require("./routes/insight.routes");
require("dotenv").config();

const app = express();

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

// Mount routes
app.use("/api/insights", insightRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
