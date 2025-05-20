import Link from 'next/link'
import Image from 'next/image'
import ImageColumn from '@/components/ImageColumn'
 
export default function Page() {
  return(
    <div className='p-5 sm:p-12.5 lg:p-20 pt-5 sm:pt-5 lg:pt-5 pr-0 sm:pr-0 lg:pr-0'>
    <Link href="/Visualizations" className='text-gray-500'> Visualizations </Link> / Graphs

    <div className="text-4xl pt-5 pb-5"> Graph Visualization </div>
    {/* <Link href="https://github.com/abobich675/Ribbit-Royale" target="_blank" className='w-8 h-8 flex items-center justify-center'>
      <Image src="/icons/github.png" alt='github' width={100} height={100} className='w-full h-full object-contain' />
    </Link> */}

    <ImageColumn images={["/Graphs/1.png", "/Graphs/3D.gif"]}>
      <div className='text-lg lg:text-2xl pb-3 sm:pb-3 lg:pb-5 text-gray-800'>
        Description:
      </div>
      This project creates and visualizes graphs by randomly generating nodes and edges, or by taking a graph structure as input.
      To produce clean and readable layouts, it uses a physics-based approach where nodes repel each other like magnets while edges act like springs, pulling connected nodes together.
      The system supports both 2D and 3D visualizations, allowing graphs to settle naturally into clear, spatially intuitive forms.
      Built in Unity, the project demonstrates how simple physical simulations can be used to organize and reveal the underlying structure of complex data in multiple dimensions.

      <div className='text-lg lg:text-2xl pb-3 sm:pb-3 lg:pb-5 pt-3 lg:pt-5 text-gray-800'>
        Abstract:
      </div>
      This project explores how physics-based simulations can be applied to graph visualization in both 2D and 3D spaces.
      By balancing attractive and repulsive forces between nodes, the system dynamically organizes graphs into clear, coherent layouts.
      The approach highlights how simple physical rules can reveal structure and relationships within complex networks.
    </ImageColumn>
  </div>
  )
}