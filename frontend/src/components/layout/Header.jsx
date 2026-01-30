const Header = ({ onMenuClick }) => {
    return (
        <header className="header-gradient text-white shadow-2xl sticky top-0 z-30">
            <div className="px-4 md:px-6 py-4">
                <div className="flex items-center justify-center gap-3">
                    <div>
                        <h1 className="text-xl md:text-2xl font-display font-bold text-white">
                            Insights Dashboard
                        </h1>
                        <p className="text-xs text-white/80 text-center">
                            Data Visualization & Analytics
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
