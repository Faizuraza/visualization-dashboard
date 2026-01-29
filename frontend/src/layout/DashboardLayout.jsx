import { useState } from "react";
import FilterPanel from "../components/filters/FilterPanel";
import Header from "../components/layout/Header";

const DashboardLayout = ({ children }) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header onMenuClick={() => setMobileFiltersOpen(!mobileFiltersOpen)} />

      <div className="flex flex-1 overflow-hidden">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-80 xl:w-96 p-4 overflow-y-auto custom-scrollbar">
          <FilterPanel />
        </aside>

        {/* Mobile Filter Drawer */}
        {mobileFiltersOpen && (
          <>
            {/* Overlay */}
            <div
              className="filter-drawer-overlay lg:hidden"
              onClick={() => setMobileFiltersOpen(false)}
            ></div>

            {/* Drawer */}
            <div className={`filter-drawer lg:hidden ${mobileFiltersOpen ? 'open' : 'closed'}`}>
              <div className="h-full overflow-y-auto custom-scrollbar p-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-white text-xl font-bold">Filters</h2>
                  <button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="text-white p-2 hover:bg-white/10 rounded-lg"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <FilterPanel />
              </div>
            </div>
          </>
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto custom-scrollbar">
          <div className="max-w-7xl mx-auto space-y-6 fade-in">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
