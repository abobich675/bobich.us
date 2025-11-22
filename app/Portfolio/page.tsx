import EntryList from "@/components/EntryList";
import PortfolioDropdown from "@/components/PortfolioDropdown";

export default function Page() {
    return(
        <div className='w-full max-w-7xl mx-auto overflow-hidden gap-10 px-5 sm:px-10 xl:px-40 pt-10 pb-20'>
            <PortfolioDropdown />

            <EntryList entries={[
                "Hackathon",
                "ASCII",
                "Ant",
                "Minecraft",
                "CharismaBot",
                "Ribbit Royale",
                "Rhombus Tiling",
                "Food Filter",
                "Tree Generation",
                "Graph Visualization",
                "Pokemon",
                "2048",
                "Bittner"
            ]} />
        </div>
    )
}