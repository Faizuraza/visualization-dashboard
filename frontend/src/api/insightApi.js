import axios from "axios";

// Use environment variable in production, fallback to localhost in development
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const API = axios.create({
  baseURL: `${API_BASE_URL}/api`,
});

export const fetchInsights = (params) =>
  API.get("/insights", { params });

export const fetchIntensityByYear = (params) =>
  API.get("/insights/intensity/year", { params });

export const fetchLikelihoodByCountry = (params) =>
  API.get("/insights/likelihood/country", { params, });

export const fetchRelevanceByTopic = (params) =>
  API.get("/insights/relevance/topic", { params });

export const fetchTopicDistribution = (params) =>
  API.get("/insights/topics/distribution", { params });

export const fetchRegionImpact = (params) =>
  API.get("/insights/region/impact", { params });

export const fetchRadarOverview = (params) =>
  API.get("/insights/overview/radar", { params });

export const fetchYearComparison = (params) =>
  API.get("/insights/year/comparison", { params });

export const fetchFilterValues = () =>
  API.get("/insights/filters");
