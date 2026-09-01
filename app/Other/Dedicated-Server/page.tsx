import Link from 'next/link'
import Image from 'next/image'
import ImageColumn from '@/components/ImageColumn'
import { ENTRIES } from '@/data/entries'
 
export default function Page() {
  const entry = ENTRIES["Dedicated Server"]
  return(
    <div className='p-5 sm:p-12.5 lg:p-20 pt-5 sm:pt-5 lg:pt-5 pr-0 sm:pr-0 lg:pr-0'>
      <Link href="/Other" className='text-gray-500'> Other </Link> / Dedicated Server

      <div className="text-4xl pt-5"> Dedicated Server Hosting </div>
      
      <ImageColumn images={entry.images}>
        <div className='text-lg lg:text-2xl pb-3 sm:pb-3 lg:pb-5 text-gray-200'>
          Description:
        </div>
        After relying on various cloud services, I found myself loving the results but not the recurring costs.
        So I bought an inexpensive machine, set it up as a dedicated server running Ubuntu, and self-hosted a suite of tools I'd otherwise be paying for monthly.
        <br/><br/>
        Beyond replacing cloud subscriptions, this server acts as a personal hosting platform, giving me a free, always-on environment to deploy and experiment with my own projects without accumulating additional cloud costs.

        <div className='text-lg lg:text-2xl pb-3 sm:pb-3 lg:pb-5 pt-3 lg:pt-5 text-gray-200'>
          Services:
        </div>
        <ul className='list-disc pl-5'>
          <li>Nginx Proxy Manager</li>
          <li>Tailscale</li>
          <li>Immich</li>
          <li>Artsii</li>
          <ul className='list-disc pl-5'>
            <li>MinIO</li>
            <li>Postgres</li>
          </ul>
        </ul>

        { entry.abstract &&
          <>
            <div className='text-lg lg:text-2xl pb-3 sm:pb-3 lg:pb-5 pt-3 lg:pt-5 text-gray-200'>
              Abstract:
            </div>
            {entry.abstract}
          </>
        }
      </ImageColumn>
    </div>
  )
}