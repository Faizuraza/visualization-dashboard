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
    <div className="max-h-40 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
      {options.map(opt => (
        <label
          key={opt}
          className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-sm text-white/90 hover:bg-white/10 cursor-pointer transition-colors"
        >
          <input
            type="checkbox"
            checked={filters[name]?.includes(opt)}
            onChange={() => toggleValue(name, opt)}
            className="w-4 h-4 accent-white rounded focus-ring"
          />
          <span className="flex-1 truncate">{opt}</span>
        </label>
      ))}
    </div>
  );

  return (
    <aside className="h-full w-full filter-panel flex flex-col">

      {/* Header */}
      <div className="px-4 py-4 border-b border-white/20">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            Filters
          </h2>
          {activeFilterCount > 0 && (
            <span className="filter-badge">
              {activeFilterCount}
            </span>
          )}
        </div>
      </div>

      {/* Scroll Area */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3 custom-scrollbar">

        {/* End Year */}
        <CollapsibleSection title="End Year" defaultOpen>
          <select
            value={filters.end_year}
            onChange={(e) =>
              setFilters({ ...filters, end_year: e.target.value })
            }
            className="w-full bg-white text-gray-800 text-sm rounded-lg px-3 py-2 focus-ring"
          >
            <option value="">All</option>
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
      <div className="p-4 border-t border-white/20">
        <button
          onClick={resetFilters}
          className="w-full bg-white text-primary text-sm py-2.5 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Reset All Filters
        </button>
      </div>

    </aside>
  );
};

export default FilterPanel;
