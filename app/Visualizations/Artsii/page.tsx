import Link from 'next/link'
import Image from 'next/image'
import ImageColumn from '@/components/ImageColumn'
 
export default function Page() {
  return(
    <div className='p-5 sm:p-12.5 lg:p-20 pt-5 sm:pt-5 lg:pt-5 pr-0 sm:pr-0 lg:pr-0'>
      <Link href="/Visualizations" className='text-gray-500'> Visualizations </Link> / Artsii

      <div className="text-4xl pt-5"> ASCII Art Generator </div>

      <div className='flex'>
        <Link href="https://github.com/abobich675/ASCII-Art" target="_blank" className='w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-100'>
          <div className='w-1/2 h-1/2'><Image src="/icons/github.png" alt='github' width={100} height={100} className='w-full h-full object-contain' /></div>
        </Link>
        <Link href="https://devpost.com/software/artsii" target="_blank" className='w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-100'>
          <div className='w-1/2 h-1/2'><Image src="/icons/devpost.png" alt='devpost' width={100} height={100} className='w-full h-full object-contain' /></div>
        </Link>
      </div>

      <ImageColumn images={["/Artsii/HomeScreen.png", "/Artsii/1.png", "/Artsii/2.png"]}>
        <div className='text-lg lg:text-2xl pb-3 sm:pb-3 lg:pb-5 text-gray-800'>
          Website Link:
        </div>
        <Link href="https://artsii.design" target="_blank" className="text-xl text-blue hover:text-blue underline">artsii.design</Link>
        <br /><br />

        <div className='text-lg lg:text-2xl pb-3 sm:pb-3 lg:pb-5 text-gray-800'>
          Description:
        </div>
        As part of the DubHacks 2025 24-hour hackathon, I worked on a two-person team to create Artsii, a creative web application that transforms AI-generated images into colorful, retro-style ASCII art.
        <br/><br/>
        We built the backend in Python, developing an algorithm that analyzes each image by breaking it into pixel patches and computing their luminance and saturation values to map colors and characters accurately.
        On the frontend, we designed an interactive website where users can generate art from text prompts, view their results instantly, and contribute to a communal gallery showcasing artwork from other visitors.
        <br/><br/>
        My main responsibilities included integrating the AI image generation API and connecting the subsystems split between multiple programs and languages.
        The project pushed us to find the right balance between creativity and technical precision, as we worked to optimize performance and image quality, all within the 24-hour timeframe.
        
        <div className='text-lg lg:text-2xl pb-3 lg:pb-5 pt-3 lg:pt-5 text-gray-800'>
          Abstract:
        </div>
        A creative web app built in just 24 hours that transforms AI-generated images into colorful, retro-style ASCII art.
        Using Python for image analysis and a modern web frontend for interactivity, Artsii converts pixel data into text-based renderings and features a communal gallery where users can share their creations, blending childhood imagination with modern day technology.
      </ImageColumn>

    </div>
  )
}