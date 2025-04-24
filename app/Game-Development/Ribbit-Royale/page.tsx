import Link from 'next/link'
import Image from 'next/image'
 
export default function Page() {
  return(
  <div className='p-20 pt-5'>
    <Link href="/Game-Development" className='text-gray-500'> Game Development </Link> / Ribbit Royale

    <div className="text-4xl pt-5 pb-5"> Ribbit Royale </div>
    <Link href="https://github.com/abobich675/Ribbit-Royale" target="_blank" className='w-8 h-8 flex items-center justify-center'>
      <Image src="/github.png" alt='github' width={100} height={100} className='w-full h-full object-contain' />
    </Link>

    <div className='pt-10 text-lg flex gap-20'>
      <div className='w-full text-gray-600'>
        <div className='text-2xl pb-5 text-gray-800'>
          Description:
        </div>
        Over the span of 10 weeks, I led a group of 5 other students in designing our very own party video game for our Software Engineering 2 class.
        The game runs on the Unity game engine, .NET multiplayer framework, and C#.

        <div className='text-2xl pb-5 pt-5 text-gray-800'>
          Abstract:
        </div>
        Ribbit Royale is an exciting and whimsical online party game designed to bring players together through fun, competitive, and engaging multiplayer minigames.
        Featuring a playful art style and a variety of unique, frog-themed interactions, the game invites players to experience amusing challenges that leverage the distinct abilities of frogs—such as swinging with their tongues, licking to interact with the environment, and even eating other players or flies.

        <div className='text-2xl pb-5 pt-5 text-gray-800'>
          Contribution:
        </div>
        As the Project Manager and Gameplay Developer, I designed and implemented 2 of the 3 minigames: "Lickity Split" and "Swamp Spotting".
        This included implementing multiplayer synchronization as well as configuring the physics engine and designing a tongue swinging mechanic, which allows players to utilize swinging as means to gain speed and reach the goal at breakneck speeds.
      </div>
      <div className='flex-shrink-0 justify-end'>
        <Image src="/Ribbit-Royale/Ribbit-Royale.jpeg" alt="Image1" width={400} height={100} className='pb-10'/>
        <embed src="/Ribbit-Royale/Lickity-Split.gif" width={400} className='pb-10' />
        <embed src="/Ribbit-Royale/Swamp-Spotting.gif" width={400} className='pb-10' />
      </div>
    </div>
    
  </div>
  )
}