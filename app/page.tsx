import Link from 'next/link'
import Image from 'next/image'
import Hexagon from '@/components/Hexagon'
import Card from '@/components/Card'
 
export default function Page() {
  return(
  <>
    <div className="h-80 bg-blue-100 text-gray-800 text-9xl flex items-center pl-10">
      hello. i'm adam
    </div>

    <br />

    <div className='flex justify-center'>
      <div className='columns-3'>
        <Link href="/Game-Development">
          <Card icon="/temp.png" header="Games" description="Developed 3+ games using Unity game engine"></Card>
        </Link>

        <Link href="/Web-Development">
          <Card icon="/temp.png" header="Websites" description="Developed however many websites"></Card>
        </Link>

        <Link href="/">
          <Card icon="/temp.png" header="Visualizations" description="Designed 2+ Visualizations"></Card>
        </Link>
      </div>
    </div>
    {/* <Image src="/profile.png" alt="Profile" width={100} height={100} /> */}
    {/* <Hexagon /> */}
  </>
  )
}