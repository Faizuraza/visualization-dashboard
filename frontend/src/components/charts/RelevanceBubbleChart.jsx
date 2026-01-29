import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../context/FilterContext";
import { fetchRelevanceByTopic } from "../../api/insightApi";
import ReactECharts from "echarts-for-react";

const RelevanceBubbleChart = () => {
    const { filters } = useContext(FilterContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchRelevanceByTopic(filters).then(res => setData(res.data));
    }, [filters]);

    const option = {
        title: {
            text: "Relevance by Topic",
            left: "center",
        },
        tooltip: {
            trigger: "item",
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
            name: "Avg Relevance"
        },
        series: [{
            data: data.map(d => d.avgRelevance?.toFixed(2) || 0),
            type: "bar",
            itemStyle: {
                color: "#91cc75"
            }
        }],
        grid: {
            bottom: 100
        }
    };

    return <ReactECharts option={option} style={{ height: 400 }} />;
};

export default RelevanceBubbleChart;
