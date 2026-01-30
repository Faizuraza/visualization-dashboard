import { useState } from "react";

const CollapsibleSection = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-white/10 pb-1.5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left text-sm font-semibold text-white py-2 px-2 hover:bg-white/5 rounded transition-colors"
        style={{ backgroundColor: 'transparent', border: 'none', outline: 'none' }}
      >
        <span>{title}</span>
        <svg
          className={`w-4 h-4 text-white transition-transform duration-200 ${open ? "rotate-180" : ""
            }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-200 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        {open && (
          <div className="mt-2 space-y-1 px-2">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default CollapsibleSection;
