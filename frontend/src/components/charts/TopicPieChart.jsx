import { useEffect, useState, useContext } from "react";
import ReactECharts from "echarts-for-react";
import { FilterContext } from "../../context/FilterContext";
import { fetchTopicDistribution } from "../../api/insightApi";
import ChartSkeleton from "../common/ChartSkeleton";

const TopicPieChart = () => {
  const { filters } = useContext(FilterContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchTopicDistribution(filters)
      .then(res => {
        setData(res.data.filter(d => d._id));
      })
      .finally(() => setLoading(false));
  }, [filters]);

  if (loading) {
    return <ChartSkeleton height="400px" />;
  }

  const option = {
    title: {
      text: "Topic Distribution",
      left: "center",
      textStyle: { fontSize: 18, fontWeight: 'bold', color: '#1e293b' }
    },
    tooltip: {
      trigger: "item",
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderColor: '#6366f1',
      borderWidth: 1
    },
    legend: {
      bottom: 10,
      textStyle: { color: '#64748b' }
    },
    color: ['#6366f1', '#8b5cf6', '#ec4899', '#f43f5e', '#f97316', '#eab308', '#84cc16', '#22c55e', '#14b8a6', '#06b6d4', '#3b82f6'],
    series: [
      {
        type: "pie",
        radius: ["45%", "75%"],
        avoidLabelOverlap: true,
        itemStyle: {
          borderRadius: 8,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: true,
          fontSize: 12,
          fontWeight: 'bold'
        },
        emphasis: {
          label: { show: true, fontSize: 14, fontWeight: 'bold' },
          itemStyle: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0, 0, 0, 0.5)' }
        },
        data: data.map(d => ({
          name: d._id,
          value: d.count
        }))
      }
    ]
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: '100%', minHeight: '450px' }}
      opts={{ renderer: 'svg' }}
    />
  );
};

export default TopicPieChart;
