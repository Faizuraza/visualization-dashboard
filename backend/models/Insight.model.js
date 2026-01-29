const mongoose = require("mongoose");

const InsightSchema = new mongoose.Schema({
  intensity: Number,
  likelihood: Number,
  relevance: Number,
  start_year: Number,
  end_year: Number,
  country: String,
  region: String,
  city: String,
  topic: String,
  sector: String,
  pestle: String,
  source: String,
  swot: String,
});

module.exports = mongoose.model("Insight", InsightSchema);
