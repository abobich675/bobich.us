import Image from 'next/image';


type CardProps = {
    icon: string;
    header: string;
  };

const Card = ({ icon, header}: CardProps) => {
    return (
        <>
            {/* Small */}
            <div className="md:hidden relative rounded-3xl bg-white border-2 border-gray-300 w-30 h-35 p-2.5 pt-2 pb-0 flex flex-col justify-top gap-2.5 hover:bg-gray-100" >
                <div className='flex justify-center'>
                    <Image src={icon} alt={"Image of " + header} width={90} height={90} className="rounded-md" /> 
                </div>
                <div className="text-xs text-center">{header}</div>
            </div>

            {/* Medium */}
            <div className="hidden md:flex lg:hidden relative rounded-3xl bg-white border-2 border-gray-300 w-45 h-52.5 p-5 pt-2 pb-0 flex-col justify-top gap-5 hover:bg-gray-100" >
                <div className='flex justify-center'>
                    <Image src={icon} alt={"Image of " + header} width={150} height={150} className="rounded-md" /> 
                </div>
                <div className="text-lg text-center">{header}</div>
            </div>

            {/* Large */}
            <div className="hidden lg:flex relative rounded-3xl bg-white border-2 border-gray-300 w-60 h-70 p-7.5 pt-5 pb-0 flex-col justify-top gap-5 hover:bg-gray-100" >
                <div className='flex justify-center'>
                    <Image src={icon} alt={"Image of " + header} width={200} height={200} className="rounded-md" /> 
                </div>
                <div className="text-2xl text-center">{header}</div>
            </div>
        </>
    );
};

export default Card;
