import Image from 'next/image';


type CardProps = {
    icon: string;
    header: string;
    description: string;
  };

const Card = ({ icon, header, description}: CardProps) => {
    return (
        <div className="relative rounded-3xl bg-gray-300 outline-2 outline-gray-800 w-60 h-80 p-7.5 pt-5 pb-0 flex flex-col justify-between" >
            <Image src={icon} alt={"Image of " + header} width={200} height={200} className="rounded-md" /> 
            <div className="text-2xl text-center">{header}</div>
            <div className="text-md text-center flex items-baseline pb-5">{description}</div>
        </div>
    );
};

export default Card;
