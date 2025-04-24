import Link from 'next/link'
import Image from 'next/image'
 
export default function Page() {
  return(
  <div className='p-20 pt-5'>
    <Link href="/Game-Development" className='text-gray-500'> Game Development </Link> / 2048 Rotate

    <div className="text-4xl pt-5 pb-5"> 2048 Rotate </div>
    {/* <Link href="https://github.com/abobich675/Ribbit-Royale" target="_blank" className='w-8 h-8 flex items-center justify-center'>
      <Image src="/github.png" alt='github' width={100} height={100} className='w-full h-full object-contain' />
    </Link> */}

    <br />
    <br />
    Work In Progress...
    
  </div>
  )
}