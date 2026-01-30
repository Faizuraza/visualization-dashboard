import { useEffect, useState } from "react";

const KpiCard = ({ title, value, icon, loading = false }) => {
  const [displayValue, setDisplayValue] = useState(0);

  // Animate counter on mount/value change
  useEffect(() => {
    if (loading || !value) return;

    const numericValue = parseFloat(value);
    if (isNaN(numericValue)) {
      setDisplayValue(value);
      return;
    }

    let startValue = 0;
    const duration = 1000;
    const increment = numericValue / (duration / 16);

    const timer = setInterval(() => {
      startValue += increment;
      if (startValue >= numericValue) {
        setDisplayValue(numericValue.toFixed(2));
        clearInterval(timer);
      } else {
        setDisplayValue(startValue.toFixed(2));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, loading]);

  if (loading) {
    return (
      <div className="kpi-card">
        <div className="h-4 bg-slate-200 rounded w-2/3 mb-3 skeleton"></div>
        <div className="h-10 bg-slate-200 rounded-lg w-1/2 skeleton"></div>
      </div>
    );
  }

  return (
    <div className="kpi-card group">
      {icon && (
        <div className="icon-wrapper group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      )}

      <h4>{title}</h4>
      <p className="counter-animate">{displayValue}</p>

      {/* Optional: Trend indicator */}
      <div className="mt-2 flex items-center gap-1 text-xs text-accent-600">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
        </svg>
        <span className="font-medium">Live Data</span>
      </div>
    </div>
  );
};

export default KpiCard;
