import Image from 'next/image';
import Link from 'next/link';


type EntryProps = {
    name: string;
    link?: string;
    image?: string;
    technologies?: string[];
    children?: React.ReactNode;
  };

const Entry = ({ name, link, image, technologies, children}: EntryProps) => {
    const content = (
    <>
        <div className='h-1 bg-gray-800 w-full flex gap-4'></div>
        <div className='flex items-center gap-4 text-5xl text-left p-5 pb-2'>
            <strong>{name}</strong>
        </div>
        <div className='flex w-full pb-5 h-60'>
            <div className='flex w-full justify-between gap-4 pl-15'>
                <div className='flex-2 text-gray-600 pr-5'>
                {children}
                </div>
                {technologies && technologies.length > 0 && (
                    <div className='flex-1 pr-5 pl-5'>
                        
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
    </>
    )
    return link ? (
        <Link href={link}>
            {content}
        </Link>
    ) : (
        content
    );
};

export default Entry;
