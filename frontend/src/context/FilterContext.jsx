import { createContext, useContext, useEffect, useState } from "react";
import { fetchFilterValues } from "../api/insightApi";
export const FilterContext = createContext();
// Custom hook to use the filter context
export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
const initialFilters = {
  end_year: "",
  topic: [],
  region: [],
  country: [],
  city: [],
  sector: [],
  pestle: [],
  source: [],
  swot: []
};
export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState(initialFilters);
  const [filterOptions, setFilterOptions] = useState({});
  useEffect(() => {
    fetchFilterValues().then(res => setFilterOptions(res.data));
  }, []);
  const resetFilters = () => setFilters(initialFilters);
  return (
    <FilterContext.Provider
      value={{ filters, setFilters, resetFilters, filterOptions }}
    >
      {children}
    </FilterContext.Provider>
  );
};
