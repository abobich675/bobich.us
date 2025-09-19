import Link from 'next/link'
import Image from 'next/image'
import ImageColumn from '@/components/ImageColumn'
 
export default function Page() {
  return(
    <div className='p-5 sm:p-12.5 lg:p-20 pt-5 sm:pt-5 lg:pt-5 pr-0 sm:pr-0 lg:pr-0'>
    <Link href="/Visualizations" className='text-gray-500'> Visualizations </Link> / Ant Simulation

    <div className="text-4xl pt-5 pb-5"> Ant Simulation </div>
    <Link href="https://github.com/abobich675/AntSimulation" target="_blank" className='w-8 h-8 flex items-center justify-center'>
      <Image src="/icons/github.png" alt='github' width={100} height={100} className='w-full h-full object-contain' />
    </Link>

    <ImageColumn images={["/Ants/Slow.gif", "/Ants/Fast.gif"]}>
      <div className='text-lg lg:text-2xl pb-3 sm:pb-3 lg:pb-5 text-gray-800'>
        Description:
      </div>
      This project implements a pheromone-based ant colony simulation utilizing GPU programming via Unity computer shaders (HLSL). The world is represented as a hexagonal grid, where each hex cell stores state information such as neighbor connections, pheromone levels, food values, and anthill markers.
      The simulation models pheromone dynamics across the grid to support ant-like behaviors such as exploration, foraging, and homing.
      <br/><br/>
      Each cell maintains four pheromone channels: exploration, forage, food, and hill. These pheromones evolve every tick through a combination of:
      <ul className='pl-5'>
        <li>Decay – pheromone levels naturally decrease over time.</li>
        <li>Spreading – pheromones diffuse to neighboring hexes based on tunable spread rates.</li>
        <li>Reinforcement – food sources and ant hills emit a continuouse stream of pheromones.</li>
        <li>Clamping – pheromone values are throttled to stay within specified bounds.</li>
      </ul>
      
      <br/>
      The GPU compute shader executes these updates in parallel across all hexes, writing results into an updated buffer each frame. This enables large-scale, real-time simulations of pheromone trails that ants can later use for navigation and decision-making.
    </ImageColumn>
  </div>
  )
}