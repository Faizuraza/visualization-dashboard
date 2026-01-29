const Insight = require("../models/Insight.model");
const buildFilters = require("../utils/buildFilters");

// GET all insights
exports.getInsights = async (req, res) => {
  try {
    const filters = buildFilters(req.query);
    const data = await Insight.find(filters);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 1️⃣ Intensity by Year
exports.intensityByYear = async (req, res) => {
  try {
    const filters = buildFilters(req.query);

    const data = await Insight.aggregate([
      { $match: filters },
      {
        $group: {
          _id: "$start_year",
          avgIntensity: { $avg: "$intensity" }
        }
      },
      { $sort: { _id: 1 } }
    ]);

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 2️⃣ Likelihood by Country
exports.likelihoodByCountry = async (req, res) => {
  try {
    const filters = buildFilters(req.query);

    const data = await Insight.aggregate([
      { $match: filters },
      {
        $group: {
          _id: "$country",
          avgLikelihood: { $avg: "$likelihood" }
        }
      },
      { $sort: { avgLikelihood: -1 } }
    ]);

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 3️⃣ Relevance by Topic
exports.relevanceByTopic = async (req, res) => {
  try {
    const filters = buildFilters(req.query);

    const data = await Insight.aggregate([
      { $match: filters },
      {
        $group: {
          _id: "$topic",
          avgRelevance: { $avg: "$relevance" }
        }
      },
      { $sort: { avgRelevance: -1 } }
    ]);

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 4️⃣ Topic Distribution
exports.topicDistribution = async (req, res) => {
  try {
    const filters = buildFilters(req.query);

    const data = await Insight.aggregate([
      { $match: filters },
      {
        $group: {
          _id: "$topic",
          count: { $sum: 1 }
        }
      }
    ]);

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 5️⃣ Region Impact
exports.regionImpact = async (req, res) => {
  try {
    const filters = buildFilters(req.query);

    const data = await Insight.aggregate([
      { $match: filters },
      {
        $group: {
          _id: "$region",
          avgIntensity: { $avg: "$intensity" },
          avgLikelihood: { $avg: "$likelihood" },
          avgRelevance: { $avg: "$relevance" }
        }
      }
    ]);

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 6️⃣ Radar Overview
exports.radarOverview = async (req, res) => {
  try {
    const filters = buildFilters(req.query);

    const data = await Insight.aggregate([
      { $match: filters },
      {
        $group: {
          _id: null,
          intensity: { $avg: "$intensity" },
          likelihood: { $avg: "$likelihood" },
          relevance: { $avg: "$relevance" }
        }
      }
    ]);

    res.json(data[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 7️⃣ Year vs Multiple Metrics
exports.yearComparison = async (req, res) => {
  try {
    const filters = buildFilters(req.query);

    const data = await Insight.aggregate([
      { $match: filters },
      {
        $group: {
          _id: "$start_year",
          intensity: { $avg: "$intensity" },
          likelihood: { $avg: "$likelihood" },
          relevance: { $avg: "$relevance" }
        }
      },
      { $sort: { _id: 1 } }
    ]);

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getFilterValues = async (req, res) => {
  try {
    const [
      topics,
      regions,
      countries,
      sectors,
      pestles,
      sources,
      swots,
      endYears
    ] = await Promise.all([
      Insight.distinct("topic"),
      Insight.distinct("region"),
      Insight.distinct("country"),
      Insight.distinct("sector"),
      Insight.distinct("pestle"),
      Insight.distinct("source"),
      Insight.distinct("swot"),
      Insight.distinct("end_year")
    ]);

    res.json({
      topics,
      regions,
      countries,
      sectors,
      pestles,
      sources,
      swots,
      endYears: endYears.filter(Boolean).sort()
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
