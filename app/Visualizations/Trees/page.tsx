import Link from 'next/link'
import Image from 'next/image'
import ImageColumn from '@/components/ImageColumn'
 
export default function Page() {
  return(
    <div className='p-5 sm:p-12.5 lg:p-20 pt-5 sm:pt-5 lg:pt-5 pr-0 sm:pr-0 lg:pr-0'>
      <Link href="/Visualizations" className='text-gray-500'> Visualizations </Link> / Procedural Tree Generation

      <div className="text-4xl pt-5 pb-5"> Procedural Tree Generation </div>
      {/* <Link href="https://github.com/abobich675/Ribbit-Royale" target="_blank" className='w-8 h-8 flex items-center justify-center'>
        <Image src="/icons/github.png" alt='github' width={100} height={100} className='w-full h-full object-contain' />
      </Link> */}

      <ImageColumn images={["/Tree-Gen/1.png", "/Tree-Gen/2.png", "/Tree-Gen/3.png"]}>
        <div className='text-lg lg:text-2xl pb-3 sm:pb-3 lg:pb-5 text-gray-800'>
          Description:
        </div>
        This project explores procedural content generation by creating randomized trees using a branching algorithm inspired by mathematic fractal trees.
        Starting from an initial seed, the system generates branches with a number of seeds at its head.
        The program allows the user to specify the trees randomness, allowing for true fractal patterns or more orgainic trees.
        After a number of generations, the branches terminate and generate leaves, resulting in varied and lifelike structures.
        Built in Unity, the project showcases how simple recursive logic combined with randomness can produce complex, realistic forms.

        <div className='text-lg lg:text-2xl pb-3 sm:pb-3 lg:pb-5 pt-3 lg:pt-5 text-gray-800'>
          Abstract:
        </div>
        This project investigates how simple recursive systems, when combined with adjustable randomness, can create visually rich structures.
        By controlling factors like branching patterns and deviation angles, users can explore a spectrum from precise fractal trees to loose, nature-inspired forms.
        The result highlights the balance between mathematical precision and organic unpredictability in procedural generation.
      </ImageColumn>
    </div>
  )
}