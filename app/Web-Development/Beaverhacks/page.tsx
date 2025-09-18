import Link from 'next/link'
import Image from 'next/image'
import ImageColumn from '@/components/ImageColumn'
 
export default function Page() {
  return(
    <div className='p-5 sm:p-12.5 lg:p-20 pt-5 sm:pt-5 lg:pt-5 pr-0 sm:pr-0 lg:pr-0'>
      <Link href="/Web-Development" className='text-gray-500'> Web Development </Link> / Hackathon Judging Platform

      <div className="text-4xl pt-5"> Hackathon Judging Platform </div>

      <div className='flex'>
        <Link href="https://github.com/OregonStateHackathonClub/judge" target="_blank" className='w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-100'>
          <div className='w-1/2 h-1/2'><Image src="/icons/github.png" alt='github' width={100} height={100} className='w-full h-full object-contain' /></div>
        </Link>

        {/* TODO: Link to website itself */}
        {/* <Link href="https://www.curseforge.com/minecraft/mc-mods/web-development" target="_blank" className='w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-100'>
          <div className='w-1/2 h-1/2'><Image src="/icons/curse.svg" alt='curseforge' width={100} height={100} className='w-full h-full object-contain' /></div>
        </Link> */}
      </div>

      <ImageColumn images={["/Beaverhacks/1.png", "/Beaverhacks/2.png", "/Beaverhacks/3.png"]}>
        <div className='text-lg lg:text-2xl pb-3 sm:pb-3 lg:pb-5 text-gray-800'>
          Description:
        </div>
        As part of my university’s hackathon club, I worked on a small team to develop a full-stack project submission and judging platform for hackathon projects and team formation.
        The platform was built using Next.js, with Prisma handling database access.
        <br/><br/>
        My main responsibility was implementing the team management features: creating teams, browsing existing teams, viewing individual team profiles, and generating invite links to streamline collaboration.
        These pages were designed with both usability and scalability in mind, ensuring participants could easily form teams and judges could track project details.
        The project required close collaboration with my teammates to integrate frontend and backend logic while maintaining a clean, maintainable codebase.
        
        <div className='text-lg lg:text-2xl pb-3 lg:pb-5 pt-3 lg:pt-5 text-gray-800'>
          Abstract:
        </div>
        A web-based hackathon judging and team submission platform built with Next.js and Prisma.
        I contributed primarily to the website's team pages, including team creation, discovery, profiles, and invite link functionality.
        This project strengthened my skills in full-stack development, database integration, and building production-ready applications in a collaborative setting.
      </ImageColumn>

    </div>
  )
}