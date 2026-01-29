import { useEffect, useState, useContext } from "react";
import ReactECharts from "echarts-for-react";
import { FilterContext } from "../../context/FilterContext";
import { fetchIntensityByYear } from "../../api/insightApi";
import ChartSkeleton from "../common/ChartSkeleton";

const IntensityLineChart = () => {
  const { filters } = useContext(FilterContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchIntensityByYear(filters)
      .then(res => setData(res.data))
      .finally(() => setLoading(false));
  }, [filters]);

  if (loading) {
    return <ChartSkeleton height="400px" />;
  }

  const option = {
    title: {
      text: "Intensity Trend by Year",
      left: "center",
      textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1e293b'
      }
    },
    tooltip: {
      trigger: "axis",
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderColor: '#6366f1',
      borderWidth: 1,
      textStyle: { color: '#1e293b' }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: "category",
      data: data.map(d => d._id),
      axisLine: { lineStyle: { color: '#cbd5e1' } },
      axisLabel: { color: '#64748b' }
    },
    yAxis: {
      type: "value",
      axisLine: { lineStyle: { color: '#cbd5e1' } },
      axisLabel: { color: '#64748b' },
      splitLine: { lineStyle: { color: '#f1f5f9' } }
    },
    series: [
      {
        type: "line",
        smooth: true,
        data: data.map(d => d.avgIntensity),
        lineStyle: {
          width: 3,
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 1, y2: 0,
            colorStops: [
              { offset: 0, color: '#6366f1' },
              { offset: 1, color: '#a855f7' }
            ]
          }
        },
        itemStyle: {
          color: '#6366f1',
          borderWidth: 2,
          borderColor: '#fff'
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(99, 102, 241, 0.3)' },
              { offset: 1, color: 'rgba(168, 85, 247, 0.05)' }
            ]
          }
        },
        emphasis: {
          focus: 'series',
          itemStyle: { borderWidth: 3 }
        }
      }
    ]
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: '100%', minHeight: '400px' }}
      opts={{ renderer: 'svg' }}
    />
  );
};

export default IntensityLineChart;
