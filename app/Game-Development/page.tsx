import Entry from '@/components/Entry'
 
export default function Page() {
  return(
  <>
    <div className="relative h-70 bg-[url('/Unity-Banner.png')] bg-cover bg-center text-gray-100 text-9xl flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black to-black/30 z-10" />
      <div className="relative z-20 pl-10">
        Game Development
      </div>
    </div>

    <Entry name="Ribbit Royale"
    link="/Game-Development/Ribbit-Royale"
    image="/Ribbit-Royale.jpeg"
    technologies={["Unity Game Engine", ".NET Multiplayer Framework", "C# Programming Language"]}>
      A cute, whimsical party game for friends to designed to bring players together through fun, competitive, and engaging multiplayer minigames.
      Embrace your inner frog by swinging with your tongue, admiring other swamp animals, and evading dangerous snakes.
    </Entry>

    <Entry name="Pokemon #00B6D5"
    link="/Game-Development/Pokemon"
    image="/Weezermon.png"
    technologies={["Unity Game Engine", "C# Programming Language"]}>
      ...
    </Entry>

    <Entry name="2048 Rotate"
    link="Game-Development/2048-Rotate"
    image="/2048-Rotate.png"
    technologies={["Unity Game Engine", "C# Programming Language"]}>
      A fun, relaxing puzzle experience where balls sizes combine when they touch each other.
      Manipulate the balls by taking control of gravity itself.
      As balls continue to collide, they merge into larger balls, creating opportunities for higher scores.
      Inspired by popular games 2048 and Suika Game.
    </Entry>

    <br />
    <br />
    
  </>
  )
}