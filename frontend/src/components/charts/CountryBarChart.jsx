import { useEffect, useState, useContext } from "react";
import ReactECharts from "echarts-for-react";
import { FilterContext } from "../../context/FilterContext";
import { fetchLikelihoodByCountry } from "../../api/insightApi";

const CountryBarChart = () => {
  const { filters } = useContext(FilterContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchLikelihoodByCountry(filters).then(res => {
      setData(res.data.filter(d => d._id));
    });
  }, [filters]);

  const option = {
    title: { text: "Likelihood by Country", left: "center" },
    tooltip: { trigger: "axis" },
    xAxis: {
      type: "category",
      data: data.map(d => d._id),
      axisLabel: { rotate: 30 }
    },
    yAxis: { type: "value" },
    series: [
      {
        type: "bar",
        data: data.map(d => d.avgLikelihood),
        barWidth: "50%"
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: 400 }} />;
};

export default CountryBarChart;
