import { useEffect, useState, useContext } from "react";
import ReactECharts from "echarts-for-react";
import { FilterContext } from "../../context/FilterContext";
import { fetchRadarOverview } from "../../api/insightApi";

const RadarOverview = () => {
  const { filters } = useContext(FilterContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchRadarOverview(filters).then(res => setData(res.data));
  }, [filters]);

  if (!data) return null;

  const option = {
    title: { text: "Overall Metrics Overview", left: "center" },
    radar: {
      indicator: [
        { name: "Intensity", max: 10 },
        { name: "Likelihood", max: 10 },
        { name: "Relevance", max: 10 }
      ]
    },
    series: [
      {
        type: "radar",
        data: [
          {
            value: [
              data.intensity,
              data.likelihood,
              data.relevance
            ],
            name: "Average Values"
          }
        ]
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: 400 }} />;
};

export default RadarOverview;
