import Link from 'next/link'
import Image from 'next/image'
import Card from '@/components/Card'
 
export default function Page() {
  return(
  <>
    <div className="h-80 bg-blue-100 text-9xl items-center p-20">
      <div className='pb-5'>
          hello. i'm adam
      </div>

      <div className='flex gap-10'>
        <Link href="/Resume" className='w-8 h-8 flex items-center justify-center'>
          <Image src="/resume.png" alt='github' width={100} height={100} className='w-full h-full object-contain' />
        </Link>
        <Link href="https://www.linkedin.com/in/adambobich/" target="_blank" className='w-8 h-8 flex items-center justify-center'>
          <Image src="/linkedin.png" alt='github' width={100} height={100} className='w-full h-full object-contain' />
        </Link>
        <Link href="https://github.com/abobich675" target="_blank" className='w-8 h-8 flex items-center justify-center'>
          <Image src="/github.png" alt='github' width={100} height={100} className='w-full h-full object-contain' />
        </Link>
      </div>
    </div>

    <br />

    <div className='flex justify-center'>
      <div className='columns-3'>
        <Link href="/Game-Development">
          <Card icon="/Unity-Symbol.png" header="Games" description="Video Games developed with Unity Game Engine"></Card>
        </Link>

        <Link href="/Web-Development">
          <Card icon="/React-Symbol.png" header="Websites" description="X+ Websites developed using Next.js"></Card>
        </Link>

        <Link href="/Visualizations">
          <Card icon="/Visualization-Symbol.png" header="Visualizations" description="Data Visualization Designs"></Card>
        </Link>
      </div>
    </div>
  </>
  )
}