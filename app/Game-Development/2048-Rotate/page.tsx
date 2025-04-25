import Link from 'next/link'
import Image from 'next/image'
 
export default function Page() {
  return(
  <div className='p-20 pt-5'>
    <Link href="/Game-Development" className='text-gray-500'> Game Development </Link> / 2048 Rotate

    <div className="text-4xl pt-5 pb-5"> 2048 Rotate </div>
    <Link href="https://toontownmc.itch.io/2048-rotate" target="_blank" className='w-8 h-8 flex items-center justify-center'>
      <Image src="/play.png" alt='play' width={100} height={100} className='w-full h-full object-contain' />
    </Link>
    {/* <Link href="https://github.com/abobich675/Ribbit-Royale" target="_blank" className='w-8 h-8 flex items-center justify-center'>
      <Image src="/github.png" alt='github' width={100} height={100} className='w-full h-full object-contain' />
    </Link> */}
      

    <div className='pt-10 text-lg flex gap-20'>
      <div className='w-full text-gray-600'>
        <div className='text-2xl pb-5 text-gray-800'>
          Description:
        </div>
        This was a solo project and one of my first full games.
        I created a relaxing puzzle experience inspired by <i>2048</i> and <i>Suika Game</i>, where balls merge and grow when they touch.
        Players control gravity in four directions to guide movement and create high-scoring combinations.
        This game helped me build a strong foundation in Unity physics, game logic, and designing engaging solo gameplay loops.

        <div className='text-2xl pb-5 pt-5 text-gray-800'>
          Abstract:
        </div>
        A fun, relaxing puzzle experience where balls sizes combine when they touch each other.
        Manipulate the balls by taking control of gravity itself.
        As balls continue to collide, they merge into larger balls, creating opportunities for higher scores.

      </div>
      <div className='flex-shrink-0 justify-end'>
        <Image src="/2048-Rotate.png" alt="Image1" width={400} height={100} className='pt-10'/>
      </div>
    </div>
  </div>
  )
}