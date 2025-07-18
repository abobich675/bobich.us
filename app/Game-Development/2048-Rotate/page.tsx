import Link from 'next/link'
import Image from 'next/image'
import ImageColumn from '@/components/ImageColumn'
 
export default function Page() {
  return(
    <div className='p-5 sm:p-12.5 lg:p-20 pt-5 sm:pt-5 lg:pt-5 pr-0 sm:pr-0 lg:pr-0'>
      <Link href="/Game-Development" className='text-gray-500'> Game Development </Link> / 2048 Rotate

      <div className="text-4xl pt-5"> 2048 Rotate </div>

      <Link href="https://toontownmc.itch.io/2048-rotate" target="_blank" className='w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-100'>
        <div className='w-1/2 h-1/2'><Image src="/icons/play.png" alt='play' width={100} height={100} className='w-full h-full object-contain' /></div>
      </Link>
      
      <ImageColumn images={["/2048-Rotate.png"]}>
        <div className='text-lg lg:text-2xl pb-3 sm:pb-3 lg:pb-5 text-gray-800'>
          Description:
        </div>
        This was a solo project and one of my first full games.
        I created a relaxing puzzle experience inspired by <i>2048</i> and <i>Suika Game</i>, where balls merge and grow when they touch.
        Players control gravity in four directions to guide movement and create high-scoring combinations.
        This game helped me build a strong foundation in Unity physics, game logic, and designing engaging solo gameplay loops.

        <div className='text-lg lg:text-2xl pb-3 sm:pb-3 lg:pb-5 pt-3 lg:pt-5 text-gray-800'>
          Abstract:
        </div>
        A fun, relaxing puzzle experience where balls sizes combine when they touch each other.
        Manipulate the balls by taking control of gravity itself.
        As balls continue to collide, they merge into larger balls, creating opportunities for higher scores.
      </ImageColumn>
    </div>
  )
}