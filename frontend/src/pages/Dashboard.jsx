import DashboardLayout from "../layout/DashboardLayout";
import KpiSection from "../components/cards/kpiSection";

import IntensityLineChart from "../components/charts/IntensityLineChart";
import LikelihoodByCountryBar from "../components/charts/LikelihoodBarChart";
import TopicDistributionPie from "../components/charts/TopicPieChart";
// import OverviewRadar from "../components/charts/RadarOverview";

const Dashboard = () => {
  return (
    <DashboardLayout>

      <KpiSection />

      {/* Charts Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">

        {/* Intensity Line Chart */}
        <div className="chart-container animate-delay-100">
          <IntensityLineChart />
        </div>

        {/* Likelihood Bar Chart */}
        <div className="chart-container animate-delay-200">
          <LikelihoodByCountryBar />
        </div>

        {/* Topic Pie Chart - Full Width */}
        <div className="chart-container xl:col-span-2 animate-delay-300">
          <TopicDistributionPie />
        </div>

        {/* Uncomment to add Radar Chart */}
        {/* <div className="chart-container xl:col-span-2">
          <OverviewRadar />
        </div> */}
      </div>

    </DashboardLayout>
  );
};

export default Dashboard;
