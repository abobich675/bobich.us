import Image from 'next/image';
import Link from 'next/link';


type ImageColumnProps = {
    images: string[];
    children?: React.ReactNode;
  };

const ImageColumn = ({ images, children}: ImageColumnProps) => {
    return (
        <div className='pt-10 text-lg flex gap-5 lg:gap-20'>
            <div className='w-full text-gray-600 text-xs lg:text-base'>
                {children}
            </div>
            <div className='p-5 sm:p-12.5 lg:p-20 pt-5 sm:pt-5 lg:pt-5'>
                {images.map((src, idx) => 
                {
                    const isGif = src.toLowerCase().endsWith('.gif');
                  
                    return (
                      <div key={idx}>
                        {/* Small */}
                        <div className="sm:hidden flex-shrink-0 justify-end">
                          {isGif ? (
                            <img src={src} alt={`Image ${idx + 1}`} width={200} height={400} className="pb-10" />
                          ) : (
                            <Image
                              src={src}
                              alt={`Image ${idx + 1}`}
                              width={200}
                              height={400}
                              className="pb-10"
                            />
                          )}
                        </div>
                  
                        {/* Medium */}
                        <div className="hidden sm:block lg:hidden flex-shrink-0 justify-end">
                          {isGif ? (
                            <img src={src} alt={`Image ${idx + 1}`} width={400} height={400} className="pb-10" />
                          ) : (
                            <Image
                              src={src}
                              alt={`Image ${idx + 1}`}
                              width={400}
                              height={400}
                              className="pb-10"
                            />
                          )}
                        </div>
                  
                        {/* Large */}
                        <div className="hidden lg:block flex-shrink-0 justify-end">
                          {isGif ? (
                            <img src={src} alt={`Image ${idx + 1}`} width={800} height={400} className="pb-10" />
                          ) : (
                            <Image
                              src={src}
                              alt={`Image ${idx + 1}`}
                              width={800}
                              height={400}
                              className="pb-10"
                            />
                          )}
                        </div>
                      </div>
                    );
                  })}
            </div>
        </div>
    );
};

export default ImageColumn;
