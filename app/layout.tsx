import DotCanvas from '@/components/DotCanvas';
import './globals.css'
import Image from 'next/image';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>Adam Bobich</title>
      <body>
        <div className='fixed -z-10'>
          <DotCanvas xSpacing={30} ySpacing={30} baseRadius={0.5} maxRadius={1} baseOpacity={0.3} color={"#005511"} glowColor='40, 20, 80' glowMagnitude={300} mouseRadius={700} lagSpeed={0.03}/>
        </div>
        <div className='h-15 w-full flex flex-row text-2xl'>
          <Link href="/" className='flex'>
            <div className='w-20 p-3 flex items-center hover:bg-gray-200 justify-center'>
              <Image src="/icons/home.png" alt="Home" width={100} height={100} className='w-full h-full object-contain' />
            </div>
          </Link>
          <Link href="/Resume" className='flex'>
            <div className='w-20 p-3 flex items-center hover:bg-gray-200 justify-center'>
              <Image src="/icons/resume.png" alt="Resume" width={100} height={100} className='w-full h-full object-contain' />
            </div>
          </Link>
          <Link href="mailto:abobich675@gmail.com" className='flex'>
            <div className='w-20 p-3 flex items-center hover:bg-gray-200 justify-center'>
              <Image src="/icons/email.png" alt="email" width={100} height={100} className='w-full h-full object-contain' />
            </div>
          </Link>
        </div>

        <div className='bg-(--accent-color)/50 w-full h-1' />
          
        {children}
      </body>
    </html>
  )
}