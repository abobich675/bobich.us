import Entry from "@/components/Entry";
import PortfolioDropdown from "@/components/PortfolioDropdown";

export default function Page() {
    return(
        <div className="px-30 pt-30">
            <div className='p-5 sm:p-5 lg:p-20 pt-0 sm:pt-0 lg:pt-0 pb-5 sm:pb-5 lg:pb-10'>
                <PortfolioDropdown />

                <Entry name="ASCII Art Generator"
                type={2}
                link="/Visualizations/Artsii"
                image="/Artsii/1.png"
                technologies={["Next.js", "Google Cloud Services", "Google Gemini Imagen API"]}>
                    A creative web app built in just 24 hours that transforms AI-generated images into colorful, retro-style ASCII art.
                    Using Python for image analysis and a modern web frontend for interactivity, Artsii converts pixel data into text-based renderings and features a communal gallery where users can share their creations, blending childhood imagination with modern day technology.
                </Entry>

                <Entry name="Ant Simulation"
                type={2}
                link="/Visualizations/Ant-Simulation"
                image="/Ants/1.png"
                technologies={["Unity", "Parallel Programming", "GPU Programming", "Compute Shaders (HLSL)"]}>
                    A GPU-accelerated ant colony simulation powered by Unity compute shaders on a hexagonal grid.
                    Implemented pheromone dynamics with decay, diffusion, and reinforcement across multiple channels to enable large-scale, real-time trail formation and swarm behaviors.
                </Entry>

                <Entry name="Hackathon Judging Platform"
                type={2}
                link="/Web-Development/Beaverhacks"
                image="/Beaverhacks/1.png"
                technologies={["Next.js", "Prisma", "Typescript", "Figma"]}>
                    A web-based hackathon judging and team submission platform built with Next.js and Prisma.
                    This project strengthened my skills in full-stack development, database integration, and building production-ready applications in a collaborative setting.
                </Entry>

                <Entry name="Minecraft Web Development Mod"
                type={2}
                link="/Web-Development/Minecraft"
                image="/Minecraft-Web-Dev-Site.png"
                technologies={["Java", "Java Socket Programming", "Minecraft Fabric API", "TCP/IP"]}>
                    A Fabric Mod for Minecraft that enables in-game TCP networking and web hosting.
                    This mod leverages low-level socket programming to establish direct TCP connections from within the Minecraft game environment.
                    It allows players or server administrators to serve custom HTML-based websites directly from the game itself—without needing any external web server.
                </Entry>
            
            </div>
        </div>
    )
}