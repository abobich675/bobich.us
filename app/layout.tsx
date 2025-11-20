import DotCanvas from '@/components/DotCanvas';
import './globals.css'
import NavBar from '@/components/NavBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>Adam Bobich</title>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <div className='fixed -z-10'>
          <DotCanvas xSpacing={30} ySpacing={30} baseRadius={0.25} maxRadius={1} baseOpacity={0.3} maxOpacity={0.7} color={"#006622"}
          glowColor='40, 20, 80' glowMagnitude={400} mouseRadius={600} lagSpeed={0.035}/>
        </div>

        <NavBar />
          
        {children}
      </body>
    </html>
  )
}