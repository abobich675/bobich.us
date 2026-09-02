import DotCanvas from '@/components/DotCanvas';
import './globals.css'
import NavBar from '@/components/NavBar';
import { Analytics } from "@vercel/analytics/next";
import Head from './head';
import HexagonCanvas from '@/components/HexagonCanvas';
import { AnimationContextProvider } from '@/components/AnimationContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>Adam Bobich</title>
      <body>
        <AnimationContextProvider>
          <Head />
          <div className='fixed z-[-1]'>
            <Analytics />
            <HexagonCanvas layer="bottom" size={80} offset={0} baseOpacity={0.03} maxOpacity={0.15} color={"#006622"}
            glowColor='40, 20, 80' glowMagnitude={0} mouseRadius={600} lagSpeed={0.035}/>
          </div>
          <div className='fixed z-1000'>
            {/* background color: 9966ee */}
            {/* hexagon green: 006622 */}
            {/* lightpurple: 9966ee */}
            {/* darkpurple: 331950 */}
            <HexagonCanvas layer="top" size={80} offset={0} color={"#111111"} animationSpeed={0.04}
            glowColor='40, 20, 80' glowMagnitude={0} mouseRadius={600} lagSpeed={0.035}/>
          </div>

          <NavBar />
          
          <div className='pt-15'>
            {children}
          </div>
        </AnimationContextProvider>
      </body>
    </html>
  )
}