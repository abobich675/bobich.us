import Link from 'next/link'
import Image from 'next/image'
import ImageColumn from '@/components/ImageColumn'
 
export default function Page() {
  return(
    <div className='p-5 sm:p-12.5 lg:p-20 pt-5 sm:pt-5 lg:pt-5 pr-0 sm:pr-0 lg:pr-0'>
      <Link href="/Game-Development" className='text-gray-500'> Game Development </Link> / Ribbit Royale

      <div className="text-4xl pt-5"> Ribbit Royale </div>
      <Link href="https://github.com/abobich675/Ribbit-Royale" target="_blank" className='w-12 h-12 flex items-center justify-center rounded-full hover:bg-(--accent-color)/25'>
        <div className='w-1/2 h-1/2'><Image src="/icons/github.png" alt='github' width={100} height={100} className='w-full h-full object-contain filter brightness-0 invert' /></div>
      </Link>
      
      <ImageColumn images={["/Ribbit-Royale/Ribbit-Royale.jpeg", "/Ribbit-Royale/Lickity-Split.gif", "/Ribbit-Royale/Swamp-Spotting.gif"]}> 
        <div className='text-lg lg:text-2xl pb-3 sm:pb-3 lg:pb-5 text-gray-200'>
          Description:
        </div>
        Over the span of 10 weeks, I led a group of five students in designing and developing a custom party video game for our Software Engineering II course.
        Built using the Unity game engine, the game features C# scripting and utilizes the .NET framework for multiplayer functionality.

        <div className='text-lg lg:text-2xl pb-3 lg:pb-5 pt-3 lg:pt-5 text-gray-200'>
          Abstract:
        </div>
        Ribbit Royale is an exciting and whimsical online party game designed to bring players together through fun, competitive, and engaging multiplayer minigames.
        Featuring a playful art style and a variety of unique, frog-themed interactions, the game invites players to experience amusing challenges that leverage the distinct abilities of frogs—such as swinging with their tongues, licking to interact with the environment, and even eating other players or flies.

        <div className='text-lg lg:text-2xl pb-3 lg:pb-5 pt-3 lg:pt-5 text-gray-200'>
          Contribution:
        </div>
        As the Project Manager and Gameplay Developer, I designed and implemented 2 of the 3 minigames: "Lickity Split" and "Swamp Spotting".
        This included implementing multiplayer synchronization as well as configuring the physics engine and designing a tongue swinging mechanic, which allows players to utilize swinging as means to gain speed and reach the goal at breakneck speeds.

        <div className="relative w-full pb-[56.25%] h-0 mt-10">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/Md5dIc12z-E"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </ImageColumn>
    </div>
  );
}