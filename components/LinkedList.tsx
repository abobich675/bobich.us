type LinkedListProps = {
    items: React.ReactNode[];
    colors: string[];
  };

const LinkedList = ({ items, colors}: LinkedListProps) => {
    
    return (
        <div>
            {items.map((item, index) => {
                return (
                    <div key={index}>
                        <div className="flex">
                            <div className="relative top-2.25 flex flex-col items-center">
                                <div className={`rounded-full w-3 h-3`} style={{ backgroundColor: colors[index % colors.length] }}/>
                                <div className="w-0.5 flex-1 bg-linear-to-b from-gray-700 to-170%" />
                            </div>
                            <div className="pl-2.5 pb-10">
                                {item}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default LinkedList;