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
        <Link href="/Games">
          <Card icon="/temp.png" header="Games" description="Developed 3+ games using Unity game engine"></Card>
        </Link>

        <Link href="/Web-Development">
          <Card icon="/temp.png" header="Websites" description="Developed however many websits"></Card>
        </Link>

        <Link href="/">
          <Card icon="/temp.png" header="3rd" description="Some 3rd thing"></Card>
        </Link>
      </div>
    </div>
    {/* <Image src="/profile.png" alt="Profile" width={100} height={100} /> */}
    {/* <Hexagon /> */}
  </>
  )
}