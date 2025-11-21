type WorkExperienceProps = {
    company: string;
    title: string;
    start: string;
    stop: string;
    bullets: string[];
  };

const WorkExperience = ({ company, title, start, stop, bullets}: WorkExperienceProps) => {
    return (
        <div>
            <div className="flex items-end">
                <div className="text-xl pr-5 text-gray-400">
                    {company}
                </div>
                <div className="text-gray-500">
                    {start} - {stop}
                </div>
            </div>
            <div className="text-3xl pt-4">
                {title}
            </div>
            <div className="text-gray-400">
                {bullets.map((text, index) => {
                    return (
                        <div key={index} className="flex pt-4 gap-2">
                            <div>-</div>
                            <div>
                                {text}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default WorkExperience;
