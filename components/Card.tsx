import Image from 'next/image';


type CardProps = {
    icon: string;
    header: string;
    description: string;
  };

const Card = ({ icon, header, description}: CardProps) => {
    return (
        <>
            {/* Small */}
            <div className="md:hidden relative rounded-3xl bg-white border-2 border-gray-300 w-30 h-40 p-2.5 pt-2 pb-0 flex flex-col justify-between hover:bg-gray-100" >
                <div className='flex justify-center'>
                    <Image src={icon} alt={"Image of " + header} width={75} height={75} className="rounded-md" /> 
                </div>
                <div className="text-xs text-center">{header}</div>
                <div className="text-[0.5rem] text-center flex items-baseline pb-5">{description}</div>
            </div>

            {/* Medium */}
            <div className="hidden md:flex lg:hidden relative rounded-3xl bg-white border-2 border-gray-300 w-45 h-60 p-5 pt-2 pb-0 flex-col justify-between hover:bg-gray-100" >
                <div className='flex justify-center'>
                    <Image src={icon} alt={"Image of " + header} width={100} height={100} className="rounded-md" /> 
                </div>
                <div className="text-lg text-center">{header}</div>
                <div className="text-sm text-center flex items-baseline pb-5">{description}</div>
            </div>

            {/* Large */}
            <div className="hidden lg:flex relative rounded-3xl bg-white border-2 border-gray-300 w-60 h-80 p-7.5 pt-5 pb-0 flex-col justify-between hover:bg-gray-100" >
                <div className='flex justify-center'>
                    <Image src={icon} alt={"Image of " + header} width={200} height={200} className="rounded-md" /> 
                </div>
                <div className="text-2xl text-center">{header}</div>
                <div className="text-md text-center flex items-baseline pb-5">{description}</div>
            </div>
        </>
    );
};

export default Card;
