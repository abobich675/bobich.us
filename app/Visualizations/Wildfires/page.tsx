import Link from 'next/link'
import Image from 'next/image'
import ImageColumn from '@/components/ImageColumn'
import { ENTRIES } from '@/data/entries'
 
export default function Page() {
  const entry = ENTRIES["Wildfires"]
  return(
    <div className='p-5 sm:p-12.5 lg:p-20 pt-5 sm:pt-5 lg:pt-5 pr-0 sm:pr-0 lg:pr-0'>
      <Link href="/Visualizations" className='text-gray-500'> Visualizations </Link> / Oregon Wildfires

      <div className="text-4xl pt-5 pb-5"> Oregon Wildfires </div>
      <Link href="https://drive.google.com/drive/folders/18EQ3EX5WI7F0YagSXHqSMugtdjwiRrD_?usp=drive_link" target="_blank" className='w-12 h-12 p-2 flex items-center justify-center rounded-full hover:bg-(--accent-color)/25'>
        <Image src="/icons/drive.png" alt='google drive' width={100} height={100} className='w-full h-full object-contain filter' />
      </Link>

      <ImageColumn images={entry.images}>
        <div className='text-lg lg:text-2xl pb-3 sm:pb-3 lg:pb-5 text-gray-200'>
          Description:
        </div>
        A data visualization project analyzing Oregon Department of Forestry wildfire data from 2000-2025.
        We examined whether Oregon's worsening wildfire problem reflects genuine severity increases or just better reporting, finding that while fire counts have stayed flat, acres burned has spiked dramatically, particularly in 2020.
        We used matplotlib for statistical charts, ArcGIS for interactive county maps with per-county cause breakdowns, and Gephi for a network graph mapping cause-county relationships weighted by certainty.
        
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