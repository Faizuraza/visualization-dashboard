const Header = ({ onMenuClick }) => {
    return (
        <header className="header-gradient text-white shadow-2xl sticky top-0 z-30">
            <div className="px-4 md:px-6 py-4">
                <div className="relative flex items-center justify-center">
                    {/* Filter Toggle Button - Absolute Left */}
                    <button
                        onClick={onMenuClick}
                        className="absolute left-0 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                        aria-label="Toggle filters"
                    >
                        {/* Hamburger Menu Icon */}
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    {/* Logo & Title - Centered */}
                    <div className="text-center">
                        <h1 className="text-xl md:text-2xl font-display font-bold text-white">
                            Insights Dashboard
                        </h1>
                        <p className="text-xs text-white/80">
                            Data Visualization & Analytics
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
