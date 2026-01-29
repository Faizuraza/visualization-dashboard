import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../context/FilterContext";
import { fetchYearComparison } from "../../api/insightApi";
import ReactECharts from "echarts-for-react";

const YearComparisonChart = () => {
    const { filters } = useContext(FilterContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchYearComparison(filters).then(res => setData(res.data));
    }, [filters]);

    const option = {
        title: {
            text: "Year-wise Comparison",
            left: "center",
        },
        tooltip: {
            trigger: "axis"
        },
        legend: {
            bottom: 0,
            data: ["Intensity", "Likelihood", "Relevance"]
        },
        xAxis: {
            type: "category",
            data: data.map(d => d._id || "Unknown")
        },
        yAxis: {
            type: "value",
            name: "Average Value"
        },
        series: [
            {
                name: "Intensity",
                type: "line",
                data: data.map(d => d.avgIntensity?.toFixed(2) || 0),
                smooth: true,
                itemStyle: { color: "#ee6666" }
            },
            {
                name: "Likelihood",
                type: "line",
                data: data.map(d => d.avgLikelihood?.toFixed(2) || 0),
                smooth: true,
                itemStyle: { color: "#5470c6" }
            },
            {
                name: "Relevance",
                type: "line",
                data: data.map(d => d.avgRelevance?.toFixed(2) || 0),
                smooth: true,
                itemStyle: { color: "#91cc75" }
            }
        ],
        grid: {
            bottom: 60
        }
    };

    return <ReactECharts option={option} style={{ height: 400 }} />;
};

export default YearComparisonChart;
