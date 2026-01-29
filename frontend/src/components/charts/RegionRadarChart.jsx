import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../context/FilterContext";
import { fetchRegionImpact } from "../../api/insightApi";
import ReactECharts from "echarts-for-react";

const RegionRadarChart = () => {
    const { filters } = useContext(FilterContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchRegionImpact(filters).then(res => setData(res.data));
    }, [filters]);

    const option = {
        title: {
            text: "Region Impact Analysis",
            left: "center",
        },
        tooltip: {
            trigger: "item",
        },
        legend: {
            bottom: 0
        },
        radar: {
            indicator: data.map(d => ({
                name: d._id || "Unknown",
                max: Math.max(...data.map(item =>
                    Math.max(item.avgIntensity || 0, item.avgLikelihood || 0, item.avgRelevance || 0)
                )) * 1.2
            }))
        },
        series: [{
            name: "Region Metrics",
            type: "radar",
            data: [
                {
                    value: data.map(d => d.avgIntensity?.toFixed(2) || 0),
                    name: "Intensity",
                    areaStyle: {
                        color: "rgba(255, 99, 132, 0.2)"
                    }
                },
                {
                    value: data.map(d => d.avgLikelihood?.toFixed(2) || 0),
                    name: "Likelihood",
                    areaStyle: {
                        color: "rgba(54, 162, 235, 0.2)"
                    }
                },
                {
                    value: data.map(d => d.avgRelevance?.toFixed(2) || 0),
                    name: "Relevance",
                    areaStyle: {
                        color: "rgba(75, 192, 192, 0.2)"
                    }
                }
            ]
        }]
    };

    return <ReactECharts option={option} style={{ height: 450 }} />;
};

export default RegionRadarChart;
