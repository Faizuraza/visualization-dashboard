import { useState } from "react";

const CollapsibleSection = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-white/20 pb-2">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left text-sm font-medium text-white py-2 hover:text-white/80 transition-colors"
      >
        <span>{title}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${open ? "rotate-180" : ""
            }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={`collapsible-content ${open ? "max-h-96" : "max-h-0"}`}
      >
        {open && (
          <div className="mt-2 space-y-1">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default CollapsibleSection;
