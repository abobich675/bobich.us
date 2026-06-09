import Entry from "./Entry";
import { ENTRIES, ENTRY_ORDER, Category } from "@/data/entries";

const EntryList = ({entries, category}: {entries?: string[], category?: Category}) => {

    let entryArray
    if (entries) {
        entryArray = entries.map(key => ENTRIES[key]);
    } else {
        entryArray = Object.values(ENTRIES)
        entryArray = ENTRY_ORDER.map(key => ENTRIES[key]);
    }

    if (category)
        entryArray = entryArray.filter(e => e.category === category);

    return (
        <>{
            entryArray.map((entry, index) => {
                return <div key={`${entry.name}-${index}`}>{
                    <Entry {... entry}>
                        {entry.abstract}
                    </Entry>
                    }</div>
                })
        }</>
    )
};

export default EntryList;
