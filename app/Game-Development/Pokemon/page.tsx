import Link from 'next/link'
import Image from 'next/image'
import ImageColumn from '@/components/ImageColumn'
 
export default function Page() {
  return(
    <div className='p-5 sm:p-12.5 lg:p-20 pt-5 sm:pt-5 lg:pt-5 pr-0 sm:pr-0 lg:pr-0'>
      <Link href="/Game-Development" className='text-gray-500'> Game Development </Link> / Pokemon #00B6D5

      <div className="text-4xl pt-5 pb-5"> Pokemon #00B6D5 </div>
      {/* <Link href="https://github.com/abobich675/Ribbit-Royale" target="_blank" className='w-8 h-8 flex items-center justify-center'>
        <Image src="/github.png" alt='github' width={100} height={100} className='w-full h-full object-contain' />
      </Link> */}

      <ImageColumn images={["/Pokemon/Cover2.png", "/Pokemon/Battle.png", "/Pokemon/Full-Weezer.png"]}>
        <div className='text-lg lg:text-2xl pb-3 sm:pb-3 lg:pb-5 text-gray-200'>
          Description:
        </div>
        Pokemon #00B6D5 is a playful, one-battle Pokemon-style game where players face off against the band Weezer.
        Developed in collaboration with a friend who handled the art and animations, I was solely responsible for all programming, including battle mechanics, state management, UI, and effects.
        This project helped me develop skills with Unity, C# scripting, and turn-based game systems, while also deepening my experience in solo development, debugging, and integrating custom animations into gameplay.

        <div className='text-lg lg:text-2xl pb-3 lg:pb-5 pt-3 lg:pt-5 text-gray-200'>
          Abstract:
        </div>
        Pokemon #00B6D5 is a quirky and unforgettable one-on-one battle experience where players face off in a single, high-stakes Pokemon match against none other than the legendary alt-rock band Weezer.
        Set in a nostalgic arena with a pixel-perfect vibe, the game blends strategic turn-based combat with absurd humor and band-themed easter eggs.
        Whether you're using type advantages or just vibing to Island in the Sun, this surreal encounter is less about victory and more about the journey—and maybe catching a guitar solo along the way.
      </ImageColumn>

    </div>
  )
}