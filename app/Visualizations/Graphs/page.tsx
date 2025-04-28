import Link from 'next/link'
import Image from 'next/image'
 
export default function Page() {
  return(
  <div className='p-20 pt-5'>
    <Link href="/Visualizations" className='text-gray-500'> Visualizations </Link> / Graphs

    <div className="text-4xl pt-5 pb-5"> Graph Visualization </div>
    {/* <Link href="https://github.com/abobich675/Ribbit-Royale" target="_blank" className='w-8 h-8 flex items-center justify-center'>
      <Image src="/icons/github.png" alt='github' width={100} height={100} className='w-full h-full object-contain' />
    </Link> */}

    <div className='pt-10 text-lg flex gap-20'>
      <div className='w-full text-gray-600'>
        <div className='text-2xl pb-5 text-gray-800'>
          Description:
        </div>
        This project creates and visualizes graphs by randomly generating nodes and edges, or by taking a graph structure as input.
        To produce clean and readable layouts, it uses a physics-based approach where nodes repel each other like magnets while edges act like springs, pulling connected nodes together.
        The system supports both 2D and 3D visualizations, allowing graphs to settle naturally into clear, spatially intuitive forms.
        Built in Unity, the project demonstrates how simple physical simulations can be used to organize and reveal the underlying structure of complex data in multiple dimensions.

        <div className='text-2xl pb-5 pt-5 text-gray-800'>
          Abstract:
        </div>
        This project explores how physics-based simulations can be applied to graph visualization in both 2D and 3D spaces.
        By balancing attractive and repulsive forces between nodes, the system dynamically organizes graphs into clear, coherent layouts.
        The approach highlights how simple physical rules can reveal structure and relationships within complex networks.
        
      </div>
      <div className='flex-shrink-0 justify-end'>
        <Image src="/Graphs/1.png" alt="Image1" width={300} height={100} className='pb-10'/>
        <embed src="/Graphs/3D.gif" width={400} className='pb-10' />
      </div>
    </div>
    
  </div>
  )
}