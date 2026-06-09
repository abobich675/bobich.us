import Link from 'next/link'
import Image from 'next/image'
import ImageColumn from '@/components/ImageColumn'
import { ENTRIES } from '@/data/entries'
 
export default function Page() {
  const entry = ENTRIES["Algorithmic Trading"]
  return(
    <div className='p-5 sm:p-12.5 lg:p-20 pt-5 sm:pt-5 lg:pt-5 pr-0 sm:pr-0 lg:pr-0'>
      <Link href="/Other" className='text-gray-500'> Other </Link> / Algorithmic Trading Strategies

      <div className="text-4xl pt-5"> Algorithmic Trading Strategies </div>
      
      <ImageColumn images={entry.images}>
        <div className='text-lg lg:text-2xl pb-3 sm:pb-3 lg:pb-5 text-gray-200'>
          Description:
        </div>
        A capstone project developed in collaboration with an industry partner under NDA.
        I collaborated to build tooling for constructing and validating automated trading strategies including a strategy builder, a configurable rule library, and a grid-based stop loss tester.
        A parameter optimizer handled threshold tuning, and strategies were evaluated against historical data through a provided backtesting engine.
        Our strategies consistently outperformed buy-and-hold baselines and prioritized loss reduction and drawdown control over raw return maximization.

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