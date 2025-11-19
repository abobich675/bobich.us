import Link from 'next/link'
import Image from 'next/image'
import Card from '@/components/Card'
import Entry from '@/components/Entry'
import TextTypeDelete from '@/components/TextTypeDelete'
import LinkedList from '@/components/LinkedList'
import WorkExperience from '@/components/WorkExperience'
 
export default function Page() {

  return(
  <>
    <div className='flex w-350 gap-10 px-50 pt-20'>
      <div className='flex-2'>
        ABOUT ME
        <TextTypeDelete
          constText={"Hi! I'm "}
          typeText={["a programmer.", "a game developer.", "a student.", "Adam."]}
          fontSize='50px'
          cursorHeight='50px'
          cursorWidth='1.5px'
          cursorColor='var(--accent-color)'
          textAlign='left'
          constTextColor='var(--primary-text-color)'
          typeTextColor='var(--accent-color)'>
        </TextTypeDelete>
        <div className='grid grid-cols-[30px_1fr] gap-2 items-center pb-5 text-gray-500'>
          <div className='w-6 h-6'><Image src="/icons/pin.png" alt='resume' width={100} height={100} className='w-full h-full object-contain filter brightness-0 invert' /> </div>
          <div>Based in San Carlos, California</div>
          <div className='w-6 h-4'><Image src="/icons/calendar.png" alt='resume' width={100} height={100} className='w-full h-full object-contain filter brightness-0 invert' /> </div>
          <div>21 Years Old</div>
          <div className='w-6 h-5'><Image src="/icons/hat.png" alt='resume' width={100} height={100} className='w-full h-full object-contain filter brightness-0 invert' /> </div>
          <div>Pursuing a Bachelor's in Computer Science</div>
        </div>
        <div>
          As a 3rd year student at Oregon State University studying Computer Science and Artificial Intelligence, I'm passionate about software development, researching sustainable artificial intelligence, and developing innovative new systems that push the limits of what we thought possible.
          <br/><br/>
          Outside of the classroom, I enjoy developing video games, websites, and various tools to visualize abstract concepts.
          Take a look at some of my projects below:
        </div>
      </div>
      <div className='flex-1 flex items-center'>
        <div className='rounded-full border-3 border-(--accent-color) p-1'>
          <div className="relative w-[300px] h-[300px]">
            <Image src="/Profile.png" alt="Profile Picture" fill className='rounded-full'/>
          </div>
        </div>
      </div>
    </div>

    <div className='flex w-350 gap-10 px-50'>
      <div className='flex-2 pt-10 text-xl'>
        Skills
        <div className='flex flex-wrap gap-2 mt-5'>
          {["Python", "C", "C#", "Java", "Next.js", "HTML", "JavaScript", "OpenGL", "SQL", "Git",
            "Web Development", "Game Development", "Parallel Programming", "GPU Programming"].map((skill, index) => {
            return (
              <span
                key={index}
                className='py-0.5 px-2 mr-1 text-sm border border-white/20 bg-white/5 rounded-full'>
                  {skill}
                </span>
            )
          })}
        </div>
      </div>
      <div className='flex-1 pt-10 text-xl'>
        Find Out More
        <div className='flex gap-2 mt-5'>
          <Link href="https://www.linkedin.com/in/adambobich/" target="_blank" className='w-10 h-10  flex items-center justify-center rounded-full hover:bg-(--accent-color)/30 border border-(--accent-color)/50'>
            <div className='w-1/2 h-1/2'><Image src="/icons/linkedin.png" alt='linkedin' width={100} height={100} className='w-full h-full object-contain filter brightness-0 invert' /> </div>
          </Link>
          <Link href="https://github.com/abobich675" target="_blank" className='w-10 h-10  flex items-center justify-center rounded-full hover:bg-(--accent-color)/30 border border-(--accent-color)/50'>
            <div className='w-1/2 h-1/2'><Image src="/icons/github.png" alt='github' width={100} height={100} className='w-full h-full object-contain filter brightness-0 invert' /> </div>
          </Link>
          <Link href="/Resume" className='w-10 h-10 flex items-center justify-center rounded-full hover:bg-(--accent-color)/30 border border-(--accent-color)/50'>
            <div className='w-1/2 h-1/2'><Image src="/icons/resume.png" alt='resume' width={100} height={100} className='w-full h-full object-contain filter brightness-0 invert' /> </div>
          </Link>
        </div>
      </div>
    </div>


    <div className='px-50 py-20'>
      <div className='py-10'>WORK EXPERIENCE</div>
      <LinkedList
        colors={["#9966ee", "#7766ff", "#5544ff"]}
        items={[
          <WorkExperience
            company="Beaverhacks"
            title="Software Engineer"
            start="Jun 2025"
            stop="Present"
            bullets={[
              "Contributed to technological infrastructure using Next.js + Prisma that scaled hackathon from 50 to 300+ participants, supporting submission and judging workflows for 1,000+ total participants",
              "Built 6 team management pages from scratch, implementing full workflows for team creation, browsing, profiles, and invite links that integrate with the platform's submission infrastructure",
              "Developed admin console enabling comprehensive user management, team oversight, and judge assignment to streamline hackathon operations"
            ]}
          />,
          <WorkExperience
            company="Charisma Robotics Lab"
            title="Undergraduate Developer Researcher"
            start="Apr 2025"
            stop="Jul 2025"
            bullets={[
              "Constructed web page and animations for Charisma's \"CharismaBot,\" a conversational AI system",
              "Developed Python middleware to bridge AI backend and frontend using WebSocket communication",
              "Implemented multi-threaded architecture ensuring responsive user experience during AI processing"
            ]}
          />,
          <WorkExperience
            company="Bittner Development Group"
            title="Developer Intern"
            start="Jun 2022"
            stop="Jun 2023"
            bullets={[
              "Programmed interactive content for 9+ Norton textbooks using reaching tens of thousands of students across dozens of universities",
              "Engineered web features, QA, and DevOps for 20+ interactive chapters using Ruby and React"
            ]}
          />
        ]}
      />
    </div>

    <div className='px-50 pb-20'>
      <div className='py-10'>CURRENT PROJECTS</div>

      <Entry name="ASCII Art Generator"
      type={2}
      link="/Visualizations/Artsii"
      image="/Artsii/1.png"
      technologies={["Next.js", "Google Cloud Services", "Google Gemini Imagen API"]}>
        A creative web app built in just 24 hours that transforms AI-generated images into colorful, retro-style ASCII art.
        Using Python for image analysis and a modern web frontend for interactivity, Artsii converts pixel data into text-based renderings and features a communal gallery where users can share their creations, blending childhood imagination with modern day technology.
      </Entry>

      <Entry name="Ant Simulation"
      type={2}
      link="/Visualizations/Ant-Simulation"
      image="/Ants/1.png"
      technologies={["Unity", "Parallel Programming", "GPU Programming", "Compute Shaders (HLSL)"]}>
          A GPU-accelerated ant colony simulation powered by Unity compute shaders on a hexagonal grid.
          Implemented pheromone dynamics with decay, diffusion, and reinforcement across multiple channels to enable large-scale, real-time trail formation and swarm behaviors.
      </Entry>
      <Entry name="Minecraft Web Development Mod"
      type={2}
      link="/Web-Development/Minecraft"
      image="/Minecraft-Web-Dev-Site.png"
      technologies={["Java", "Java Socket Programming", "Minecraft Fabric API", "TCP/IP"]}>
          A Fabric Mod for Minecraft that enables in-game TCP networking and web hosting.
          This mod leverages low-level socket programming to establish direct TCP connections from within the Minecraft game environment.
          It allows players or server administrators to serve custom HTML-based websites directly from the game itself—without needing any external web server.
      </Entry>
    </div>
  </>
  )
}