import { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import FilterPanel from "../components/filters/FilterPanel";
import KpiSection from "../components/cards/KpiSection";
import IntensityLineChart from "../components/charts/IntensityLineChart";
import LikelihoodBarChart from "../components/charts/LikelihoodBarChart";
import RelevanceBubbleChart from "../components/charts/RelevanceBubbleChart";
import CountryBarChart from "../components/charts/CountryBarChart";
import TopicPieChart from "../components/charts/TopicPieChart";
import RegionRadarChart from "../components/charts/RegionRadarChart";
import YearComparisonChart from "../components/charts/YearComparisonChart";
import LoadingSpinner from "../components/common/LoadingSpinner";
import { useFilter } from "../context/FilterContext";

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showFilters, setShowFilters] = useState(true); // State for filter panel visibility
    const { filters } = useFilter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const queryParams = new URLSearchParams();
                // Add filters to query params
                Object.entries(filters).forEach(([key, value]) => {
                    if (value && value !== "" && value !== "all") {
                        queryParams.append(key, value);
                    }
                });
                const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
                const response = await fetch(`${apiUrl}/api/insights?${queryParams}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                console.error("Error fetching data:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [filters]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                <Header onMenuClick={() => setShowFilters(!showFilters)} />
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                <Header onMenuClick={() => setShowFilters(!showFilters)} />
                <div className="container mx-auto px-4 py-8">
                    <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-6 text-center">
                        <h2 className="text-2xl font-bold text-red-400 mb-2">Error Loading Data</h2>
                        <p className="text-red-300">{error}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Header onMenuClick={() => setShowFilters(!showFilters)} />

            <div className="flex relative">
                {/* Filter Panel Sidebar */}
                <div
                    className={`
                        fixed lg:sticky top-[73px] left-0 h-[calc(100vh-73px)] z-40
                        ${showFilters ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                        ${showFilters ? 'w-64' : 'lg:w-0'}
                        transition-all duration-300 ease-in-out
                        overflow-hidden
                    `}
                >
                    <FilterPanel />
                </div>

                {/* Backdrop for mobile */}
                {showFilters && (
                    <div
                        className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                        onClick={() => setShowFilters(false)}
                    />
                )}

                {/* Main Content */}
                <div className="flex-1 min-w-0">
                    <div className="container mx-auto px-4 py-8">
                        {/* KPI Section */}
                        <KpiSection data={data} />

                        {/* Charts Flex Layout */}
                        <div className="flex flex-wrap gap-6 mb-10">
                            <div className="flex-1 min-w-[300px]">
                                <IntensityLineChart data={data} />
                            </div>
                            <div className="flex-1 min-w-[300px]">
                                <LikelihoodBarChart data={data} />
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-6 mb-9">
                            <div className="flex-1 min-w-[300px]">
                                <RelevanceBubbleChart data={data} />
                            </div>
                            <div className="flex-1 min-w-[300px]">
                                <TopicPieChart data={data} />
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-6 mb-6">
                            {/* <CountryBarChart data={data} /> */}
                            <div className="flex-1 min-w-[300px]">
                                <YearComparisonChart data={data} />
                            </div>
                            <div className="flex-1 min-w-[300px]">
                                <RegionRadarChart data={data} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;