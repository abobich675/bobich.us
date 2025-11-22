import Entry from "@/components/Entry";
import PortfolioDropdown from "@/components/PortfolioDropdown";

export default function Page() {
    return(
        <div className='w-full max-w-7xl mx-auto overflow-hidden gap-10 px-5 sm:px-10 xl:px-40 pt-10 pb-20'>
            <PortfolioDropdown />

            <Entry name="Hackathon Judging Platform"
            link="/Web-Development/Beaverhacks"
            image="/Beaverhacks/1.png"
            technologies={["Next.js", "Prisma", "Typescript", "Figma"]}>
                A web-based hackathon platform for judging and submission.
                This project strengthened my skills in full-stack development, database integration, and building production-ready applications in a collaborative setting.
            </Entry>

            <Entry name="ASCII Art Generator"
            type={2}
            link="/Visualizations/Artsii"
            image="/Artsii/1.png"
            technologies={["Python", "Next.js", "Google Cloud Services", "Google Gemini Imagen API"]}>
                A creative web app built in just 24 hours that transforms images into retro-style ASCII art.
                This project features AI image generation, conversions from image to text-based renderings, and a communal gallery to share your creations.
            </Entry>

            <Entry name="Ant Simulation"
            link="/Visualizations/Ant-Simulation"
            image="/Ants/1.png"
            technologies={["Unity", "Parallel Programming", "GPU Programming", "Compute Shaders (HLSL)"]}>
                A GPU-accelerated ant colony simulation powered by Unity compute shaders.
                Implemented pheromone dynamics with decay, diffusion, and reinforcement across multiple channels to enable large-scale, real-time trail formation and swarm behaviors.
            </Entry>


            <Entry name="Minecraft Web Development Mod"
            link="/Web-Development/Minecraft"
            image="/Minecraft-Web-Dev-Site.png"
            technologies={["Java", "Java Socket Programming", "Minecraft Fabric API", "TCP/IP"]}>
                A Fabric Mod for Minecraft that enables in-game TCP networking and web hosting.
                Leverages low-level socket programming, this mod establishes TCP connections from within the Minecraft game environment and allows players to serve real, custom websites from inside the game.
            </Entry>

            <Entry name="CharismaBot Speaker-Listener Web AI"
            link="https://github.com/imshrirangpatil/speaker-listener-web-ai"
            image="/Charisma.png"
            technologies={["Python", "Socketio Communication", "HTML", "JavaScript"]}>
                CharismaBot is a conversational AI system that I helped build as undergraduate research with Charisma Robotics Lab.
                It implements the Speaker-Listener Technique using voice input, emotion detection, and large language models.
            </Entry>

            <Entry name="Ribbit Royale"
            link="/Game-Development/Ribbit-Royale"
            image="/Ribbit-Royale/Ribbit-Royale.jpeg"
            technologies={["Unity Game Engine", ".NET Multiplayer Framework", "C# Programming Language"]}>
                A cute, whimsical party game for friends to designed to bring players together through fun, competitive, and engaging multiplayer minigames.
                Embrace your inner frog by swinging with your tongue, admiring other swamp animals, and evading dangerous snakes.
            </Entry>

            <Entry name="Rhombus Tiling"
            link="/Visualizations/Rhombus-Tiling"
            image="/Rhombus-Tiling/1.png"
            technologies={["OpenGL"]}>
                This project focuses on visualizing a mathematical concept involving rhombus tiling and rotation.
                It demonstrates how a 2D representation of rhombuses can be interpreted as a 3D isometric arrangement of cubes.
                By letting users interact with a 2D rhombuses, rotating groups of 3 rhombuses at a time, they can add or remove cubes from the 3D model in real time.
            </Entry>

            <Entry name="Food Filter"
            link="https://foodfilter.onrender.com/"
            image="/Food-Filter.png"
            technologies={["Express.js", "Google Gemini API", "Node.js"]}>
                For a 24 hour hackathon with 3 teammates, I helped create a web application to remove the clutter from bloated recipe websites.
                No longer will you have to scroll through an endless feed of life stories, popup ads, and SEO-stuffed paragraphs just to find a list of ingredients.
                Simply enter the url of a desired recipe and viola! All the important information with none of the excess.
            </Entry>

            <Entry name="Tree Generation"
            link="/Visualizations/Trees"
            image="/Tree-Gen/1.png"
            technologies={["Unity Game Engine", "C#"]}>
                A tree generator which creates unique, randomized trees utilizing simple recursive systems.
                By controlling factors like branching patterns and deviation angles, users can explore a spectrum from precise fractal trees to loose, natural forms.
            </Entry>

            <Entry name="Graph Visualization"
            link="/Visualizations/Graphs"
            image="/Graphs/1.png"
            technologies={["Unity Game Engine", "C#"]}>
                A physics-based simulation representing a graph data structure in both 2D and 3D spaces.
                By balancing attractive and repulsive forces between nodes, the system dynamically organizes graphs into clear, coherent layouts.
            </Entry>

            <Entry name="Pokemon #00B6D5"
            link="/Game-Development/Pokemon"
            image="/Pokemon/Battle.png"
            technologies={["Unity Game Engine", "C# Programming Language"]}>
                Pokemon #00B6D5 is a one-on-one battle experience where players face off in a high-stakes Pokemon match against none other than the legendary alt-rock band Weezer.
                Set in a nostalgic arena with a pixel-perfect vibe, the game blends strategic turn-based combat with absurd humor and band-themed easter eggs.
            </Entry>

            <Entry name="2048 Rotate"
            link="Game-Development/2048-Rotate"
            image="/2048-Rotate.png"
            technologies={["Unity Game Engine", "C# Programming Language"]}>
                A relaxing puzzle experience where balls combine and grow when they touch.
                Manipulate the balls by taking control of gravity itself and shoot for a new high score!
                Inspired by popular games <i>2048</i> and <i>Suika Game</i>.
            </Entry>

            <Entry name="Bittner Development Group"
            link="https://bittnerdev.com/"
            image="/Bittner.png"
            technologies={["React", "Ruby", "HTML", "PCAT"]}>
                Working at the Bittner Development Group, I worked on interactive textbooks for clients.
                I programmed interactive content for 9+ Norton textbooks using reaching tens of thousands of students across dozens of universities.
                Engineered web features, QA, and DevOps for 20+ interactive chapters using Ruby and React.
            </Entry>
        </div>
    )
}