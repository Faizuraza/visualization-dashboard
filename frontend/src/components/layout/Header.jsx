const Header = ({ onMenuClick }) => {
    return (
        <header className="header-gradient text-white shadow-2xl sticky top-0 z-30">
            <div className="px-4 md:px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Filter Toggle Button */}
                    <button
                        onClick={onMenuClick}
                        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                        aria-label="Toggle filters"
                    >
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                        </svg>
                    </button>

                    {/* Logo & Title - Centered */}
                    <div className="flex items-center gap-3 flex-1 justify-center">
                        <div>
                            <h1 className="text-xl md:text-2xl font-display font-bold text-white">
                                Insights Dashboard
                            </h1>
                            <p className="text-xs text-white/80 text-center">
                                Data Visualization & Analytics
                            </p>
                        </div>
                    </div>

                    {/* Spacer to balance layout */}
                    <div className="w-9"></div>
                </div>
            </div>
        </header>
    );
};

export default Header;
