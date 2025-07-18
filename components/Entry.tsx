import Image from 'next/image';
import Link from 'next/link';


type EntryProps = {
    type?: number;
    name: string;
    link?: string;
    image?: string;
    technologies?: string[];
    barColor?: string;
    children?: React.ReactNode;
  };

const Entry = ({ type = 1, name, link, image, technologies, barColor, children}: EntryProps) => {
    if (type == 2) {
        const content = (
        <div className={link ? 'hover:bg-gray-100' : ''}>
            <div className='flex items-center gap-4 text-1xl md:text-2xl lg:text-3xl text-left p-5 pb-2'>
                <strong>{name}</strong>
            </div>
            <div className='flex w-full pb-5 h-80 sm:h-60'>
                <div className='flex w-full justify-between gap-4 pl-7.5 md:pl-10 lg:pl-15'>
                    <div className='flex-2 text-gray-600 pr-5 text-xs md:text-sm lg:text-base'>
                    {children}
                    </div>
                    {technologies && technologies.length > 0 && (
                        <div className='hidden md:block flex-1 pr-5 pl-5'>
                            
                            <div className='text-xl'> <strong>Technologies</strong> </div>
                            <ul className="list-disc list-inside mt-3 text-md text-gray-600">
                                {technologies.map((tech, index) => (
                                    <li key={index}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <div className='flex-2 flex justify-end'>
                        {image && <Image src={image} alt={"Image"} width={200} height={200} className="rounded-md w-full h-full object-contain" /> }
                    </div>
                </div>
            </div>
        </div>
        )
        return link ? (
            <Link href={link}>
                {content}
            </Link>
        ) : (
            content
        );
    } else {
        const content = (
        <div className={link ? 'hover:bg-gray-200' : ''}>
            <div className={`h-1 ${barColor ? barColor : 'bg-gray-800'} w-full flex gap-4`}></div>
            
            <div className='flex items-center gap-4 text-2xl md:text-4xl lg:text-5xl text-left p-5 pb-2'>
                <strong>{name}</strong>
            </div>
            <div className='flex w-full pb-5 h-80 sm:h-60'>
                <div className='flex w-full justify-between gap-4 pl-7.5 md:pl-10 lg:pl-15'>
                    <div className='flex-2 text-gray-600 pr-5 text-xs md:text-sm lg:text-base'>
                    {children}
                    </div>
                    {technologies && technologies.length > 0 && (
                        <div className='hidden md:block flex-1 pr-5 pl-5'>
                            
                            <div className='text-xl'> <strong>Technologies</strong> </div>
                            <ul className="list-disc list-inside mt-3 text-md text-gray-600">
                                {technologies.map((tech, index) => (
                                    <li key={index}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <div className='flex-2 flex justify-end'>
                        {image && <Image src={image} alt={"Image"} width={200} height={200} className="rounded-md w-full h-full object-contain" /> }
                    </div>
                </div>
            </div>
        </div>
        )
        return link ? (
            <Link href={link}>
                {content}
            </Link>
        ) : (
            content
        );
    }
};

export default Entry;
