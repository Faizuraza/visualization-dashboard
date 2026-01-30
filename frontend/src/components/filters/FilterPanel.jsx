import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";
import CollapsibleSection from "./CollapsibleSection";

const FilterPanel = () => {
  const {
    filters,
    setFilters,
    resetFilters,
    filterOptions
  } = useContext(FilterContext);

  const toggleValue = (name, value) => {
    const current = filters[name] || [];
    const updated = current.includes(value)
      ? current.filter(v => v !== value)
      : [...current, value];

    setFilters({ ...filters, [name]: updated });
  };

  // Count active filters
  const activeFilterCount = Object.values(filters).reduce((count, filter) => {
    if (Array.isArray(filter)) {
      return count + filter.length;
    }
    return filter ? count + 1 : count;
  }, 0);

  const CheckboxList = ({ name, options = [] }) => (
    <div className="max-h-32 overflow-y-auto space-y-0.5 pr-1 custom-scrollbar">
      {options.map(opt => (
        <label
          key={opt}
          className="flex items-center gap-1.5 px-2 py-1 rounded text-xs text-white/90 hover:bg-white/10 cursor-pointer transition-colors"
        >
          <input
            type="checkbox"
            checked={filters[name]?.includes(opt)}
            onChange={() => toggleValue(name, opt)}
            className="w-3 h-3 accent-purple-400 rounded focus:ring-1 focus:ring-purple-400"
          />
          <span className="flex-1 truncate">{opt}</span>
        </label>
      ))}
    </div>
  );

  return (
    <div className=" header-gradient filter-panel flex flex-col h-full w-64 lg:w-64 text-white shadow-2xl">

      {/* Header */}
      {/* <div className="px-3 py-3 border-b border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
            </svg> */}
            <h2 className="text-sm font-bold text-white">
              Filters
            </h2>
          {/* </div>
          {activeFilterCount > 0 && (
            <span className="px-2 py-0.5 bg-purple-500 text-white text-xs font-semibold rounded-full">
              {activeFilterCount}
            </span>
          )}
        </div>
      </div> */}

      {/* Scroll Area */}
      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2 custom-scrollbar">

        {/* End Year */}
        <CollapsibleSection title="End Year" defaultOpen>
          <select
            value={filters.end_year}
            onChange={(e) =>
              setFilters({ ...filters, end_year: e.target.value })
            }
            className="w-full bg-white/10 text-white text-xs rounded-md px-2 py-1.5 border border-white/20 focus:outline-none focus:ring-1 focus:ring-white focus:border-white"
          >
            <option value="">All Years</option>
            {filterOptions.endYears?.map(y => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </CollapsibleSection>

        <CollapsibleSection title="Topic">
          <CheckboxList name="topic" options={filterOptions.topics} />
        </CollapsibleSection>

        <CollapsibleSection title="Region">
          <CheckboxList name="region" options={filterOptions.regions} />
        </CollapsibleSection>

        <CollapsibleSection title="Country">
          <CheckboxList name="country" options={filterOptions.countries} />
        </CollapsibleSection>

        <CollapsibleSection title="Sector">
          <CheckboxList name="sector" options={filterOptions.sectors} />
        </CollapsibleSection>

        <CollapsibleSection title="PESTLE">
          <CheckboxList name="pestle" options={filterOptions.pestles} />
        </CollapsibleSection>

        <CollapsibleSection title="Source">
          <CheckboxList name="source" options={filterOptions.sources} />
        </CollapsibleSection>

        <CollapsibleSection title="SWOT">
          <CheckboxList name="swot" options={filterOptions.swots} />
        </CollapsibleSection>

      </div>

      {/* Reset */}
      <div className="p-3 border-t border-white/10">
        <button
          onClick={resetFilters}
          className="w-full bg-white/20 backdrop-blur text-white text-sm py-2.5 px-4 rounded-lg font-semibold hover:bg-white/30 transition-all duration-200 shadow-lg border border-white/30"
        >
          Reset All
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
