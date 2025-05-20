type EntryProps = {
    textColor: string;
    image: string;
    children?: React.ReactNode;
  };

const Banner = ({textColor, image, children}: EntryProps) => {
    return (
        <>
            {/* Small */}
            <div className={`sm:hidden relative h-30 bg-cover bg-center ${textColor} text-5xl flex items-center`}
                style={{ backgroundImage: `url(${image})` }}>
                <div className="absolute inset-0 bg-gradient-to-r from-black to-black/30 z-10" />
                <div className="relative z-20 pl-10">
                    {children}
                </div>
            </div>

            {/* Medium */}
            <div className={`hidden sm:flex lg:hidden relative h-50 bg-cover bg-center ${textColor} text-6xl items-center`}
                style={{ backgroundImage: `url(${image})` }}>
                <div className="absolute inset-0 bg-gradient-to-r from-black to-black/30 z-10" />
                <div className="relative z-20 pl-10">
                    {children}
                </div>
            </div>

            {/* Large */}
            <div className={`hidden lg:flex relative h-70 bg-cover bg-center ${textColor} text-8xl items-center`}
                style={{ backgroundImage: `url(${image})` }}>
                <div className="absolute inset-0 bg-gradient-to-r from-black to-black/30 z-10" />
                <div className="relative z-20 pl-10">
                    {children}
                </div>
            </div>
        </>
    );
};

export default Banner;
