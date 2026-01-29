import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../context/FilterContext";
import { fetchLikelihoodByCountry } from "../../api/insightApi";
import ReactECharts from "echarts-for-react";
import ChartSkeleton from "../common/ChartSkeleton";

const LikelihoodBarChart = () => {
    const { filters } = useContext(FilterContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetchLikelihoodByCountry(filters)
            .then(res => setData(res.data))
            .finally(() => setLoading(false));
    }, [filters]);

    if (loading) {
        return <ChartSkeleton height="400px" />;
    }

    const option = {
        title: {
            text: "Likelihood by Country",
            left: "center",
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow"
            }
        },
        xAxis: {
            type: "category",
            data: data.map(d => d._id || "Unknown"),
            axisLabel: {
                rotate: 45,
                interval: 0
            }
        },
        yAxis: {
            type: "value",
            name: "Avg Likelihood"
        },
        series: [{
            data: data.map(d => d.avgLikelihood?.toFixed(2) || 0),
            type: "bar",
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0, y: 0, x2: 0, y2: 1,
                    colorStops: [
                        { offset: 0, color: '#6366f1' },
                        { offset: 1, color: '#8b5cf6' }
                    ]
                },
                borderRadius: [6, 6, 0, 0]
            },
            emphasis: {
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0, y: 0, x2: 0, y2: 1,
                        colorStops: [
                            { offset: 0, color: '#4f46e5' },
                            { offset: 1, color: '#7c3aed' }
                        ]
                    }
                }
            }
        }],
        grid: {
            bottom: 100
        }
    };

    return (
        <ReactECharts
            option={option}
            style={{ height: '100%', minHeight: '400px' }}
            opts={{ renderer: 'svg' }}
        />
    );
};

export default LikelihoodBarChart;
