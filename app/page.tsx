import Link from 'next/link'
import Image from 'next/image'
import Card from '@/components/Card'
import TextTypeDelete from '@/components/TextTypeDelete'
 
export default function Page() {
  return(
  <>
    <div className="h-80 bg-blue-100 text-9xl items-center p-20">
      <div className='pb-5'>
        <TextTypeDelete
          constText={"Hello! I'm "}
          typeText={["a programmer.", "a game developer.", "a student.", "Adam."]}
          fontSize='80px'
          cursorHeight='80px'
          cursorWidth='4px'
          textAlign='left'>
        </TextTypeDelete>
      </div>

      <div className='flex gap-10'>
        <Link href="/Resume" className='w-8 h-8 flex items-center justify-center'>
          <Image src="/icons/resume.png" alt='github' width={100} height={100} className='w-full h-full object-contain' />
        </Link>
        <Link href="https://www.linkedin.com/in/adambobich/" target="_blank" className='w-8 h-8 flex items-center justify-center'>
          <Image src="/icons/linkedin.png" alt='github' width={100} height={100} className='w-full h-full object-contain' />
        </Link>
        <Link href="https://github.com/abobich675" target="_blank" className='w-8 h-8 flex items-center justify-center'>
          <Image src="/icons/github.png" alt='github' width={100} height={100} className='w-full h-full object-contain' />
        </Link>
        <Link href="mailto:abobich675@gmail.com" className='w-8 h-8 flex items-center justify-center'>
          <Image src="/icons/email.png" alt='email' width={100} height={100} className='w-full h-full object-contain' />
        </Link>
      </div>
    </div>

    <div className='flex gap-20 p-20'>
      <div className="text-lg w-full">
        <div className='text-4xl pb-5'>Hi!</div>
          I'm Adam, a 2nd year student at Oregon State University studying Computer Science and Artificial Intelligence.
          I'm excited to implement AI in new ways that push the barriers of what we thought possible.
          <br/><br/>
          I also work on coding projects in my free time, such as video game designs, websites, and data visualizations.
      </div>
      <div className='flex-shrink-0 justify-end pr-30'>
        <Image src="/Profile.png" alt="Profile Picture" width={300} height={300} className='rounded-full outline-3 outline-blue'/>
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