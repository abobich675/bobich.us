import Link from 'next/link'
import Image from 'next/image'
 
export default function Page() {
  return(
  <div className='p-20 pt-5'>
    <Link href="/Visualizations" className='text-gray-500'> Visualizations </Link> / Graphs

    <div className="text-4xl pt-5 pb-5"> Graph Visualization </div>
    {/* <Link href="https://github.com/abobich675/Ribbit-Royale" target="_blank" className='w-8 h-8 flex items-center justify-center'>
      <Image src="/icons/github.png" alt='github' width={100} height={100} className='w-full h-full object-contain' />
    </Link> */}

    <div className='pt-10 text-lg flex gap-20'>
      <div className='w-full text-gray-600'>
        <div className='text-2xl pb-5 text-gray-800'>
          Description:
        </div>
        hello
        <br /><br />
        hello2

        <div className='text-2xl pb-5 pt-5 text-gray-800'>
          Abstract:
        </div>
        hello one more time.
        
      </div>
      <div className='flex-shrink-0 justify-end'>
        <Image src="/temp.png" alt="Image1" width={400} height={100} className='pb-10'/>
      </div>
    </div>
    
  </div>
  )
}