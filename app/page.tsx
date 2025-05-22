import Link from 'next/link'
import Image from 'next/image'
import Card from '@/components/Card'
import TextTypeDelete from '@/components/TextTypeDelete'
 
export default function Page() {

  return(
  <>
    <div className="h-45 sm:h-60 lg:h-80 bg-blue-100 text-9xl items-center p-1 pl-10 sm:pl-15 lg:pl-20 lg:p-20">
      {/* Small */}
      <div className='sm:hidden pb-0'>
        <TextTypeDelete
          constText={"Hello! I'm "}
          typeText={["a programmer.", "a game developer.", "a student.", "Adam."]}
          fontSize='20px'
          cursorHeight='20px'
          cursorWidth='1'
          textAlign='left'>
        </TextTypeDelete>
      </div>

      {/* Medium */}
      <div className='hidden sm:block lg:hidden pb-5'>
        <TextTypeDelete
          constText={"Hello! I'm "}
          typeText={["a programmer.", "a game developer.", "a student.", "Adam."]}
          fontSize='35px'
          cursorHeight='35px'
          cursorWidth='2'
          textAlign='left'>
        </TextTypeDelete>
      </div>

      {/* Large */}
      <div className='hidden lg:block pb-5'>
        <TextTypeDelete
          constText={"Hello! I'm "}
          typeText={["a programmer.", "a game developer.", "a student.", "Adam."]}
          fontSize='60px'
          cursorHeight='60px'
          cursorWidth='3'
          textAlign='left'>
        </TextTypeDelete>
      </div>

      <div className='flex gap-10'>
        <Link href="/Resume" className='w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center'>
          <Image src="/icons/resume.png" alt='github' width={100} height={100} className='w-full h-full object-contain' />
        </Link>
        <Link href="https://www.linkedin.com/in/adambobich/" target="_blank" className='w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center'>
          <Image src="/icons/linkedin.png" alt='github' width={100} height={100} className='w-full h-full object-contain' />
        </Link>
        <Link href="https://github.com/abobich675" target="_blank" className='w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center'>
          <Image src="/icons/github.png" alt='github' width={100} height={100} className='w-full h-full object-contain' />
        </Link>
        <Link href="mailto:abobich675@gmail.com" className='w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center'>
          <Image src="/icons/email.png" alt='email' width={100} height={100} className='w-full h-full object-contain' />
        </Link>
      </div>
    </div>

    {/* Small */}
    <div className='sm:hidden block p-10 pl-5'>
      <div className='flex justify-center pb-10'>
        <div className='rounded-full border-3 border-blue p-1 w-min'>
          <div className="relative w-[150px] h-[150px]">
            <Image src="/Profile.png" alt="Profile Picture" fill className='rounded-full'/>
          </div>
        </div>
      </div>
      <div className="text-sm w-full">
        <div className='text-4xl pb-5'>Hi!</div>
          I'm Adam, a 2nd year student at Oregon State University studying Computer Science and Artificial Intelligence.
          I'm excited to implement AI in new ways that push the barriers of what we thought possible.
          <br/><br/>
          I also work on coding projects in my free time, such as video game designs, websites, and data visualizations.
      </div>
    </div>

    {/* Large */}
    <div className='hidden sm:flex gap-5 lg:gap-20 sm:gap-10 p-20 pl-5 lg:pl-20'>
      <div className="text-sm md:text-lg w-full">
        <div className='text-4xl pb-5'>Hi!</div>
          I'm Adam, a 2nd year student at Oregon State University studying Computer Science and Artificial Intelligence.
          I'm excited to implement AI in new ways that push the barriers of what we thought possible.
          <br/><br/>
          I also work on coding projects in my free time, such as video game designs, websites, and data visualizations.
      </div>
      <div className='flex-shrink-0 justify-end lg:pr-[7.5%] sm:pr-0'>
        <div className='rounded-full border-3 border-blue p-1'>
          <div className="relative w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] sm:w-[30vw] sm:h-[30vw]">
            <Image src="/Profile.png" alt="Profile Picture" fill className='rounded-full'/>
          </div>
        </div>
      </div>
    </div>

    <div className='flex justify-center'>
      <div className='columns-3'>
        <Link href="/Game-Development">
          <Card icon="/Unity-Symbol.png" header="Games" description="Video Games developed with Unity Game Engine"></Card>
        </Link>

        <Link href="/Web-Development">
          <Card icon="/React-Symbol.png" header="Websites" description="15+ Websites developed using React/Next.js"></Card>
        </Link>

        <Link href="/Visualizations">
          <Card icon="/Visualization-Symbol.png" header="Visualizations" description="Data Visualization and Implementation"></Card>
        </Link>
      </div>
    </div>
    <br/><br/><br/><br/><br/>
  </>
  )
}