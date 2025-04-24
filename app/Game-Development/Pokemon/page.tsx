import Link from 'next/link'
import Image from 'next/image'
 
export default function Page() {
  return(
  <div className='p-20 pt-5'>
    <Link href="/Game-Development" className='text-gray-500'> Game Development </Link> / Pokemon #00B6D5

    <div className="text-4xl pt-5 pb-5"> Pokemon #00B6D5 </div>
    {/* <Link href="https://github.com/abobich675/Ribbit-Royale" target="_blank" className='w-8 h-8 flex items-center justify-center'>
      <Image src="/github.png" alt='github' width={100} height={100} className='w-full h-full object-contain' />
    </Link> */}

    <div className='pt-10 text-lg flex gap-20'>
      <div className='w-full text-gray-600'>
        <div className='text-2xl pb-5 text-gray-800'>
          Description:
        </div>
        Pokemon #00B6D5 is a playful, one-battle Pokemon-style game where players face off against the band Weezer.
        Developed in collaboration with a friend who handled the art and animations, I was solely responsible for all programming, including battle mechanics, state management, UI, and effects.
        This project helped me develop skills with Unity, C# scripting, and turn-based game systems, while also deepening my experience in solo development, debugging, and integrating custom animations into gameplay.

        <div className='text-2xl pb-5 pt-5 text-gray-800'>
          Abstract:
        </div>
        Pokemon #00B6D5 is a quirky and unforgettable one-on-one battle experience where players face off in a single, high-stakes Pokemon match against none other than the legendary alt-rock band Weezer.
        Set in a nostalgic arena with a pixel-perfect vibe, the game blends strategic turn-based combat with absurd humor and band-themed easter eggs.
        Whether you're using type advantages or just vibing to Island in the Sun, this surreal encounter is less about victory and more about the journey—and maybe catching a guitar solo along the way.

      </div>
      <div className='flex-shrink-0 justify-end'>
        <Image src="/Pokemon/Cover2.png" alt="Image1" width={400} height={100} className='pb-10'/>
        <Image src="/Pokemon/Battle.png" alt="Image1" width={400} height={100} className='pb-10'/>
        <Image src="/Pokemon/Full-Weezer.png" alt="Image1" width={400} height={100} className='pb-10'/>


      </div>
    </div>
    
  </div>
  )
}