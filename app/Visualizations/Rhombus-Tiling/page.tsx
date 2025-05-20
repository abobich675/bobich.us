import Link from 'next/link'
import Image from 'next/image'
import ImageColumn from '@/components/ImageColumn'
 
export default function Page() {
  return(
    <div className='p-5 sm:p-12.5 lg:p-20 pt-5 sm:pt-5 lg:pt-5 pr-0 sm:pr-0 lg:pr-0'>
      <Link href="/Visualizations" className='text-gray-500'> Visualizations </Link> / Rhombus Tiling

      <div className="text-4xl pt-5 pb-5"> Rhombus Tiling in OpenGL </div>
      {/* <Link href="https://github.com/abobich675/Ribbit-Royale" target="_blank" className='w-8 h-8 flex items-center justify-center'>
        <Image src="/icons/github.png" alt='github' width={100} height={100} className='w-full h-full object-contain' />
      </Link> */}

      <ImageColumn images={["/Rhombus-Tiling/Concept.png", "/Rhombus-Tiling/1.png", "/Rhombus-Tiling/2.png"]}>
        <div className='text-lg lg:text-2xl pb-3 sm:pb-3 lg:pb-5 text-gray-800'>
          Description:
        </div>
        For this project, I created an interactive visualization to explore a mathematical problem involving the tiling of rhombuses.
        The core concept lies in the idea that 3 rhombuses can be grouped to form a hexagon, and that these hexagons can be interpreted as a 3D isometric arrangement of cubes depending on their rotation.
        Rotating a hexagon by 60-degrees creates a cube where there wasn't one before, and rotating 60-degrees once more removes it.
        The program allows the user to select rhombuses and rotate them, while updating a real-time display of the 3D representation of cubes.
        This assists the user in bridging the gap between two-dimensional and three-dimensional representations, helping users understand complex coordinate transformations.
        <br /><br />
        Built with OpenGL, the project emphasizes challenges in converting coordinates into a 3rd dimension, detecting clicks, and applying dynamic rotations.
        It provides an interactive, digestible way to visualize how tiled 2D rhombuses may represent cubes in a 3D space.

        <div className='text-lg lg:text-2xl pb-3 sm:pb-3 lg:pb-5 pt-3 lg:pt-5 text-gray-800'>
          Abstract:
        </div>
        This project focuses on visualizing a mathematical concept involving rhombus tiling and rotation.
        It presents the fact that three rhombuses can be grouped together to form a hexagon and that by rotating these groups, a 2D tiling can be interpreted as a 3D isometric arrangement of cubes.
        By letting users interact with a 2D tiling and reflecting their actions in real-time 3D, the program shows how simple shapes transform into cubes.
      </ImageColumn>
    </div>
  )
}