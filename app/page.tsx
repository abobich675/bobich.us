import Link from 'next/link'
import Image from 'next/image'
import TextTypeDelete from '@/components/TextTypeDelete'
import LinkedList from '@/components/LinkedList'
import WorkExperience from '@/components/WorkExperience'
import EntryList from '@/components/EntryList'
 
export default function Page() {

  return(
  <div className='w-full max-w-7xl mx-auto overflow-hidden gap-10 px-10 xl:px-45 pt-10'>
    <div className='flex gap-10'>
      <div className='flex-2'>
        <h1>ABOUT ME</h1>
        <div className='block lg:hidden pt-5'>
          <TextTypeDelete
            constText={"Hi! I'm "}
            typeText={["a programmer.", "a game developer.", "a student.", "Adam."]}
            fontSize='20px'
            cursorHeight='20px'
            cursorWidth='1.5px'
            cursorColor='var(--accent-color)'
            textAlign='left'
            constTextColor='var(--primary-text-color)'
            typeTextColor='var(--accent-color)'>
          </TextTypeDelete>
        </div>
        <div className='hidden lg:block'>
          <TextTypeDelete
            constText={"Hi! I'm "}
            typeText={["a programmer.", "a game developer.", "a student.", "Adam."]}
            fontSize='40px'
            cursorHeight='40px'
            cursorWidth='1.5px'
            cursorColor='var(--accent-color)'
            textAlign='left'
            constTextColor='var(--primary-text-color)'
            typeTextColor='var(--accent-color)'>
          </TextTypeDelete>
        </div>
        <div className='grid grid-cols-[30px_1fr] gap-2 items-center pb-5 text-gray-400'>
          <div className='w-6 h-6'><Image src="/icons/pin.png" alt='resume' width={100} height={100} className='w-full h-full object-contain filter brightness-0 invert' /> </div>
          <div>Based in San Carlos, California</div>
          <div className='w-6 h-4'><Image src="/icons/calendar.png" alt='resume' width={100} height={100} className='w-full h-full object-contain filter brightness-0 invert' /> </div>
          <div>20 Years Old</div>
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
      <div className='flex-1 hidden sm:flex items-center'>
        <div className='rounded-full border-3 border-(--accent-color) p-1'>
          <div className="relative sm:w-[175px] sm:h-[175px] md:w-[225px] md:h-[225px] lg:w-[300px] lg:h-[300px]">
            <Image src="/Profile.png" alt="Profile Picture" fill className='rounded-full'/>
          </div>
        </div>
      </div>
    </div>

    <div className='flex gap-10 pt-10'>
      <div className='flex-2 pt-10 text-xl'>
        Skills
        <div className='flex flex-wrap gap-2 mt-5'>
          {["Python", "C", "C#", "Java", "Next.js", "HTML", "JavaScript", "OpenGL", "SQL", "Git",
            "Web Development", "Game Development", "Parallel Programming", "GPU Programming"].map((skill, index) => {
            return (
              <span
              key={index}
              className='py-0.5 px-2 mr-1 text-[0.6rem] sm:text-sm border border-white/20 bg-white/5 rounded-full'>
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
    <div className='py-20'>
      <h1 className='py-10'>WORK EXPERIENCE</h1>
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

    <div className='pb-20'>
      <h1 className='py-5'>CURRENT PROJECTS</h1>

      <EntryList entries={[
        "ASCII",
        "Ant",
        "Minecraft"
      ]} />
    </div>
  </div>
  )
}