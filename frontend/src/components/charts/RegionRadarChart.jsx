import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../context/FilterContext";
import { fetchRegionImpact } from "../../api/insightApi";
import ReactECharts from "echarts-for-react";

const RegionRadarChart = () => {
    const { filters } = useContext(FilterContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchRegionImpact(filters).then(res => {
            // Ensure data is always an array
            setData(Array.isArray(res.data) ? res.data : []);
        });
    }, [filters]);

    // If no data, show empty chart with message
    if (!data || data.length === 0) {
        return (
            <div className="card-gradient rounded-xl p-6 flex items-center justify-center" style={{ height: 450 }}>
                <p className="text-white/60">No region data available</p>
            </div>
        );
    }

    const option = {
        title: {
            text: "Region Impact Analysis",
            left: "center",
            textStyle: {
                color: "#fff"
            }
        },
        tooltip: {
            trigger: "item",
        },
        legend: {
            bottom: 0,
            textStyle: {
                color: "#fff"
            }
        },
        radar: {
            indicator: data.map(d => ({
                name: d._id || "Unknown",
                max: Math.max(...data.map(item =>
                    Math.max(
                        parseFloat(item.avgIntensity) || 0,
                        parseFloat(item.avgLikelihood) || 0,
                        parseFloat(item.avgRelevance) || 0
                    )
                )) * 1.2 || 10
            }))
        },
        series: [{
            name: "Region Metrics",
            type: "radar",
            data: [
                {
                    value: data.map(d => parseFloat(d.avgIntensity) || 0),
                    name: "Intensity",
                    areaStyle: {
                        color: "rgba(255, 99, 132, 0.2)"
                    }
                },
                {
                    value: data.map(d => parseFloat(d.avgLikelihood) || 0),
                    name: "Likelihood",
                    areaStyle: {
                        color: "rgba(54, 162, 235, 0.2)"
                    }
                },
                {
                    value: data.map(d => parseFloat(d.avgRelevance) || 0),
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
