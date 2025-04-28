import Entry from '@/components/Entry'
 
export default function Page() {
  return(
  <>
    <div className="relative h-70 bg-[url('/Visualizations-Banner.png')] bg-cover bg-center text-gray-100 text-9xl flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black to-black/30 z-10" />
      <div className="relative z-20 pl-10">
        Visualizations
      </div>
    </div>

    <Entry name="Rhombus Tiling"
    link="/Visualizations/Rhombus-Tiling"
    image="/Rhombus-Tiling1.png"
    technologies={["OpenGL"]}>
      This project focuses on visualizing a mathematical concept involving rhombus tiling and rotation.
      It presents the fact that three rhombuses can be grouped together to form a hexagon and that by rotating these groups, a 2D tiling can be interpreted as a 3D isometric arrangement of cubes.
      By letting users interact with a 2D tiling and reflecting their actions in real-time 3D, the program shows how simple shapes transform into cubes.
    </Entry>

    <Entry name="Graph Visualization"
    link="/Visualizations/Graph-Generator"
    image="/temp.png"
    technologies={["Unity Game Engine", "C#"]}>
      ...
    </Entry>

    <Entry name="Tree Generator"
    link="/Visualizations/Tree-Generator"
    image="/temp.png"
    technologies={["Unity Game Engine", "C#"]}>
      ...
    </Entry>

    <br />
    <br />
    
  </>
  )
}