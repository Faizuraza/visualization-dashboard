import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/insights",
});

// Filters
export const fetchFilterValues = () =>
  API.get("/filters");

// Charts
export const fetchIntensityByYear = (params) =>
  API.get("/intensity/year", { params });

export const fetchLikelihoodByCountry = (params) =>
  API.get("/likelihood/country", { params });

export const fetchTopicDistribution = (params) =>
  API.get("/topics/distribution", { params });


export const fetchRadarOverview = (params) =>
  API.get("/overview/radar", { params });

// Year comparison
export const fetchYearComparison = (params) =>
  API.get("/year/comparison", { params });


export const fetchRelevanceByTopic = (params) =>
  API.get("/relevance/topic", { params });

export const fetchRegionImpact = (params) =>
  API.get("/region/impact", { params });
