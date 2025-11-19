import DotCanvas from '@/components/DotCanvas';
import './globals.css'
import Image from 'next/image';
import Link from 'next/link';
import NavBar from '@/components/NavBar';

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
          <DotCanvas xSpacing={30} ySpacing={30} baseRadius={0.5} maxRadius={1} baseOpacity={0.3} color={"#006622"}
          glowColor='40, 20, 80' glowMagnitude={300} mouseRadius={700} lagSpeed={0.04}/>
        </div>

        <NavBar />
          
        {children}
      </body>
    </html>
  )
}