import PortfolioDropdown from '@/components/PortfolioDropdown'
import EntryList from '@/components/EntryList'
 
export default function Page() {
  return(
    <div className='w-full max-w-7xl mx-auto overflow-hidden gap-10 px-5 sm:px-10 xl:px-40 pt-10 pb-20'>
      <PortfolioDropdown value='WEBSITES' />

      <EntryList entries={[
        "Hackathon",
        "Minecraft",
        "CharismaBot",
        "Bittner"
      ]} />
    </div>
  )
}