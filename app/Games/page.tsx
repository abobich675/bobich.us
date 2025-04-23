import Link from 'next/link'
import Image from 'next/image'
import Hexagon from '@/components/Hexagon'
import Entry from '@/components/Entry'
 
export default function Page() {
  return(
  <>
    <div className="relative h-70 bg-[url('/Unity-Banner.png')] bg-cover bg-center text-gray-100 text-9xl flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black to-black/40 z-10" />
      <div className="relative z-20 pl-10">
        Game Development
      </div>
    </div>

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

    <Entry name="2048 Rotate"
    link="/2048-Rotate"
    image="/temp.png"
    technologies={["Unity Game Engine", "C# Programming Language"]}>
      ...
    </Entry>
    
  </>
  )
}