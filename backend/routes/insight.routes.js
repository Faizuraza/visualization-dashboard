const express = require("express");
const router = express.Router();
const controller = require("../controllers/insight.controller");

router.get("/", controller.getInsights);
router.get("/intensity/year", controller.intensityByYear);
router.get("/likelihood/country", controller.likelihoodByCountry);
router.get("/relevance/topic", controller.relevanceByTopic);
router.get("/topics/distribution", controller.topicDistribution);
router.get("/region/impact", controller.regionImpact);
router.get("/overview/radar", controller.radarOverview);
router.get("/year/comparison", controller.yearComparison);
router.get("/filters", controller.getFilterValues);

module.exports = router;
