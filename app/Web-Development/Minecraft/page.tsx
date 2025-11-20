import Link from 'next/link'
import Image from 'next/image'
import ImageColumn from '@/components/ImageColumn'
 
export default function Page() {
  return(
    <div className='p-5 sm:p-12.5 lg:p-20 pt-5 sm:pt-5 lg:pt-5 pr-0 sm:pr-0 lg:pr-0'>
      <Link href="/Web-Development" className='text-gray-500'> Web Development </Link> / Minecraft Web Development Mod

      <div className="text-4xl pt-5"> Minecraft Web Development Mod </div>

      <div className='flex'>
        <Link href="https://github.com/abobich675/Minecraft-Web-Development-Mod" target="_blank" className='w-12 h-12 flex items-center justify-center rounded-full hover:bg-(--accent-color)/25'>
          <div className='w-1/2 h-1/2'><Image src="/icons/github.png" alt='github' width={100} height={100} className='w-full h-full object-contain filter brightness-0 invert' /></div>
        </Link>

        <Link href="https://www.curseforge.com/minecraft/mc-mods/web-development" target="_blank" className='w-12 h-12 flex items-center justify-center rounded-full hover:bg-(--accent-color)/25'>
          <div className='w-1/2 h-1/2'><Image src="/icons/curse.svg" alt='curseforge' width={100} height={100} className='w-full h-full object-contain filter brightness-0 invert' /></div>
        </Link>
      </div>

      <ImageColumn images={["/Minecraft-Web-Dev.png"]}>
        <div className='text-lg lg:text-2xl pb-3 sm:pb-3 lg:pb-5 text-gray-200'>
          Description:
        </div>
        A Fabric-based Minecraft mod that transforms the game into a live coding sandbox for web development.
        By embedding a lightweight TCP server directly into the game world, this mod allows players and server operators to host static HTML/CSS websites without relying on any external infrastructure.
        When the game/server launches, a thread will be created to listen for HTTP requests at a specified port.
        Then, within the game, players can build their own website structure and run a command to add the website to a list accessible through the hosted port.
        With simple commands and in-game building mechanics, users can:
        <ul className='list-disc list-inside p-2.5'>
          <li>Establish direct TCP socket connections using Java’s networking libraries</li>
          <li>Serve custom HTML pages over HTTP directly from Minecraft</li>
          <li>Construct &lt;div&gt; and &lt;span&gt; elements as 3D block structures, using signs and lecterns to embed text and styles</li>
          <li>Apply CSS-like styling by stacking blocks to define classes and rules visually</li>
        </ul>

        This mod serves as an interesting proof of concept that put my networking skills to the test.
        By combining low-level socket programming with Minecraft’s game mechanics, it challenged me to bridge the gap between in-game logic and real-world web protocols—resulting in a creative and technically rewarding project.

        <div className='text-lg lg:text-2xl pb-3 lg:pb-5 pt-3 lg:pt-5 text-gray-200'>
          Abstract:
        </div>
        A Fabric Mod for Minecraft that enables in-game TCP networking and web hosting capabilities.
        This mod leverages low-level socket programming to establish direct TCP connections from within the Minecraft game environment.
        It allows players or server administrators to serve custom HTML-based websites directly from the game itself—without needing any external web server.
        More than just a networking tool, it acts as a visual and interactive proof of concept—designed to help you understand the fundamentals of web development by rendering HTML elements like divs and spans as physical blocks within the game world.
      </ImageColumn>

    </div>
  )
}