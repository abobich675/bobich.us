import Link from 'next/link'
import Image from 'next/image'
 
export default function Page() {
  return(
  <div className='p-20 pt-5'>
    <Link href="/Visualizations" className='text-gray-500'> Visualizations </Link> / Rhombus Tiling

    <div className="text-4xl pt-5 pb-5"> Rhombus Tiling in OpenGL </div>
    {/* <Link href="https://github.com/abobich675/Ribbit-Royale" target="_blank" className='w-8 h-8 flex items-center justify-center'>
      <Image src="/icons/github.png" alt='github' width={100} height={100} className='w-full h-full object-contain' />
    </Link> */}

    <div className='pt-10 text-lg flex gap-20'>
      <div className='w-full text-gray-600'>
        <div className='text-2xl pb-5 text-gray-800'>
          Description:
        </div>
        For this project, I created an interactive visualization to explore a mathematical problem involving the tiling of rhombuses.
        The goal was to display how three rhombuses can be grouped to form a hexagon, and how rotating the hexagon by 60 degrees transforms the tiling.
        By converting the 2D rhombuses into 3D cubes, the visualization bridges the gap between two-dimensional and three-dimensional representations, helping users understand complex coordinate transformations.
        <br /><br />
        Built with OpenGL, the project emphasizes challenges in converting coordinates into a 3rd dimension, detecting clicks, and applying dynamic rotations.
        It provides an interactive, digestible way to visualize how tiled 2D rhombuses may represent cubes in a 3D space.

        <div className='text-2xl pb-5 pt-5 text-gray-800'>
          Abstract:
        </div>

        This project focuses on visualizing a mathematical concept involving rhombus tiling and rotation.
        It leverages the fact that three rhombuses can be grouped together to form a hexagon, which can then be rotated by 60 degrees to modify the tiling.
        The user can select three adjacent rhombuses in a 2D display to perform a rotation, dynamically altering the structure.
        A corresponding 3D representation reflects the changes in real-time, allowing users to explore how simple 2D shapes can transform into 3D cubes using rotation and coordinate conversion.
        
      </div>
      <div className='flex-shrink-0 justify-end'>
        <Image src="/Rhombus-Tiling1.png" alt="Image1" width={400} height={100} className='pb-10'/>
        <Image src="/Rhombus-Tiling2.png" alt="Image2" width={400} height={100} className='pb-10'/>
      </div>
    </div>
    
  </div>
  )
}