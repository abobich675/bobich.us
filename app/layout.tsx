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
        <div className='h-15 w-full flex flex-row text-2xl'>
          <Link href="/" className='flex'>
            <div className='w-20 p-3 flex items-center hover:bg-gray-200 justify-center'>
              <Image src="/home.png" alt="Home" width={100} height={100} className='w-full h-full object-contain' />
            </div>
          </Link>
          <Link href="/Resume" className='flex'>
            <div className='w-20 p-3 flex items-center hover:bg-gray-200 justify-center'>
              <Image src="/resume.png" alt="Resume" width={100} height={100} className='w-full h-full object-contain' />
            </div>
          </Link>
        </div>

        <div className='bg-blue w-full h-1' />
          
        {children}
      </body>
    </html>
  )
}