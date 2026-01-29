const ChartSkeleton = ({ height = "400px" }) => {
    return (
        <div className="w-full animate-pulse space-y-4" style={{ height }}>
            {/* Title skeleton */}
            <div className="h-6 bg-slate-200 rounded w-1/3 mb-4"></div>

            {/* Chart area skeleton */}
            <div className="flex items-end justify-between h-full gap-2 pb-8">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="bg-gradient-to-t from-indigo-200 to-purple-200 rounded-t flex-1 skeleton"
                        style={{
                            height: `${Math.random() * 60 + 40}%`,
                            animationDelay: `${i * 100}ms`,
                        }}
                    ></div>
                ))}
            </div>

            {/* Legend skeleton */}
            <div className="flex gap-4 justify-center mt-4">
                <div className="h-3 bg-slate-200 rounded w-20"></div>
                <div className="h-3 bg-slate-200 rounded w-20"></div>
                <div className="h-3 bg-slate-200 rounded w-20"></div>
            </div>
        </div>
    );
};

export default ChartSkeleton;
