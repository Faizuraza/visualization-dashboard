import { useEffect, useState, useContext } from "react";
import { FilterContext } from "../../context/FilterContext";
import { fetchRadarOverview } from "../../api/insightApi";
import KpiCard from "./KpiCard";

const KpiSection = () => {
  const { filters } = useContext(FilterContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchRadarOverview(filters).then(res => setData(res.data));
  }, [filters]);

  if (!data) return null;

  return (
    <div className="kpi-grid">
      <KpiCard title="Avg Intensity" value={data.intensity.toFixed(2)} />
      <KpiCard title="Avg Likelihood" value={data.likelihood.toFixed(2)} />
      <KpiCard title="Avg Relevance" value={data.relevance.toFixed(2)} />
    </div>
  );
};

export default KpiSection;
