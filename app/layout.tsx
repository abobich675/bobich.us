import DotCanvas from '@/components/DotCanvas';
import './globals.css'
import NavBar from '@/components/NavBar';
import { Analytics } from "@vercel/analytics/next";
import Head from './head';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>Adam Bobich</title>
      <body>
        <Head />
        <div className='fixed -z-10'>
          <Analytics />
          <DotCanvas xSpacing={30} ySpacing={30} baseRadius={0.25} maxRadius={1} baseOpacity={0.3} maxOpacity={0.7} color={"#006622"}
          glowColor='40, 20, 80' glowMagnitude={400} mouseRadius={600} lagSpeed={0.035}/>
        </div>

        <NavBar />
          
        {children}
      </body>
    </html>
  )
}