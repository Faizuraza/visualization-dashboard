const Header = ({ onMenuClick }) => {
    return (
        <header className="header-gradient text-white shadow-2xl sticky top-0 z-30">
            <div className="px-4 md:px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={onMenuClick}
                        className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors focus-ring"
                        aria-label="Toggle filters"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>

                    {/* Logo & Title */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                            <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-xl md:text-2xl font-display font-bold">
                                Insights Dashboard
                            </h1>
                            <p className="text-xs text-white/80 hidden sm:block">
                                Data Visualization & Analytics
                            </p>
                        </div>
                    </div>

                    {/* Optional: User/Settings Area */}
                    <div className="hidden md:flex items-center gap-2">
                        <div className="text-right text-sm">
                            <p className="font-medium">Welcome</p>
                            <p className="text-xs text-white/70">Admin User</p>
                        </div>
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center font-bold">
                            A
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
