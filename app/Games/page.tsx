import Link from 'next/link'
import Image from 'next/image'
import Hexagon from '@/components/Hexagon'
import Entry from '@/components/Entry'
 
export default function Page() {
  return(
  <>
    <div className="h-40 text-amber-900 text-9xl flex items-center pt-10">
      Games
    </div>

    <div className='h-1 bg-red w-full'></div>

    <div className='text-xl text-gray-600 p-5'>My portfolio of Game Design</div>

    <br />

    <Entry name="Ribbit Royale"
    link="/Ribbit-Royale"
    image="/temp2.png"
    technologies={["Unity Game Engine", ".NET Multiplayer Framework", "C# Programming Language"]}>
      A cute, whimsical party game for friends to designed to bring players together through fun, competitive, and engaging multiplayer minigames.
      Embrace your inner frog by swinging with your tongue, admiring other swamp animals, and evading dangerous snakes.
    </Entry>

    <Entry name="Pokemon #00B6D5"
    link="/Pokemon"
    image="/temp.png"
    technologies={["Unity Game Engine", "C# Programming Language"]}>
      ...
    </Entry>
    
  </>
  )
}