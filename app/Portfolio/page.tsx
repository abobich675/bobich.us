import Entry from "@/components/Entry";
import PortfolioDropdown from "@/components/PortfolioDropdown";

export default function Page() {
    return(
        <div className='px-50 pt-30 pb-20'>
            <PortfolioDropdown />

            <Entry name="Hackathon Judging Platform"
            link="/Web-Development/Beaverhacks"
            image="/Beaverhacks/1.png"
            technologies={["Next.js", "Prisma", "Typescript", "Figma"]}>
                A web-based hackathon judging and team submission platform built with Next.js and Prisma.
                This project strengthened my skills in full-stack development, database integration, and building production-ready applications in a collaborative setting.
            </Entry>

            <Entry name="ASCII Art Generator"
            link="/Visualizations/Artsii"
            image="/Artsii/1.png"
            technologies={["Next.js", "Google Cloud Services", "Google Gemini Imagen API"]}>
                A creative web app built in just 24 hours that transforms AI-generated images into colorful, retro-style ASCII art.
                Using Python for image analysis and a modern web frontend for interactivity, Artsii converts pixel data into text-based renderings and features a communal gallery where users can share their creations, blending childhood imagination with modern day technology.
            </Entry>

            <Entry name="Ant Simulation"
            link="/Visualizations/Ant-Simulation"
            image="/Ants/1.png"
            technologies={["Unity", "Parallel Programming", "GPU Programming", "Compute Shaders (HLSL)"]}>
                A GPU-accelerated ant colony simulation powered by Unity compute shaders on a hexagonal grid.
                Implemented pheromone dynamics with decay, diffusion, and reinforcement across multiple channels to enable large-scale, real-time trail formation and swarm behaviors.
            </Entry>


            <Entry name="Minecraft Web Development Mod"
            link="/Web-Development/Minecraft"
            image="/Minecraft-Web-Dev-Site.png"
            technologies={["Java", "Java Socket Programming", "Minecraft Fabric API", "TCP/IP"]}>
                A Fabric Mod for Minecraft that enables in-game TCP networking and web hosting.
                This mod leverages low-level socket programming to establish direct TCP connections from within the Minecraft game environment.
                It allows players or server administrators to serve custom HTML-based websites directly from the game itself—without needing any external web server.
            </Entry>

            <Entry name="CharismaBot Speaker-Listener Web AI"
            link="https://github.com/imshrirangpatil/speaker-listener-web-ai"
            image="/Charisma.png"
            technologies={["Python", "Socketio Communication", "HTML", "JavaScript"]}>
                CharismaBot is a conversational AI system that I'm working on as undergraduate research with Charisma Robotics.
                It that implements the Speaker-Listener Technique using voice input, emotion detection, and large language models.
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
                It presents the fact that three rhombuses can be grouped together to form a hexagon and that by rotating these groups, a 2D tiling can be interpreted as a 3D isometric arrangement of cubes.
                By letting users interact with a 2D tiling and reflecting their actions in real-time 3D, the program shows how simple shapes transform into cubes.
            </Entry>

            <Entry name="Food Filter"
            link="https://foodfilter.onrender.com/"
            image="/Food-Filter.png"
            technologies={["Express.js", "Google Gemini API", "Node.js"]}>
                In a 24 hour hackathon with 3 teammates, I helped create a web application to remove the clutter from bloated recipe websites.
                No longer will you have to scroll through an endless feed of life stories, popup ads, and SEO-stuffed paragraphs just to find a list of ingredients.
                Simply enter the url of a desired recipe and viola! All the important information with none of the excess.
                (Complete with calculations for a meal's nutritional information)
            </Entry>

            <Entry name="Tree Generation"
            link="/Visualizations/Trees"
            image="/Tree-Gen/1.png"
            technologies={["Unity Game Engine", "C#"]}>
                This project investigates how simple recursive systems, when combined with adjustable randomness, can create visually rich structures.
                By controlling factors like branching patterns and deviation angles, users can explore a spectrum from precise fractal trees to loose, nature-inspired forms.
                The result highlights the balance between mathematical precision and organic unpredictability in procedural generation.
            </Entry>

            <Entry name="Graph Visualization"
            link="/Visualizations/Graphs"
            image="/Graphs/1.png"
            technologies={["Unity Game Engine", "C#"]}>
                This project explores how physics-based simulations can be applied to graph visualization in both 2D and 3D spaces.
                By balancing attractive and repulsive forces between nodes, the system dynamically organizes graphs into clear, coherent layouts.
                The approach highlights how simple physical rules can reveal structure and relationships within complex networks.
            </Entry>

            <Entry name="Pokemon #00B6D5"
            link="/Game-Development/Pokemon"
            image="/Pokemon/Battle.png"
            technologies={["Unity Game Engine", "C# Programming Language"]}>
                Pokemon #00B6D5 is a one-on-one battle experience where players face off in a single, high-stakes Pokemon match against none other than the legendary alt-rock band Weezer.
                Set in a nostalgic arena with a pixel-perfect vibe, the game blends strategic turn-based combat with absurd humor and band-themed easter eggs.
            </Entry>

            <Entry name="2048 Rotate"
            link="Game-Development/2048-Rotate"
            image="/2048-Rotate.png"
            technologies={["Unity Game Engine", "C# Programming Language"]}>
                A fun, relaxing puzzle experience where balls sizes combine when they touch each other.
                Manipulate the balls by taking control of gravity itself.
                As balls continue to collide, they merge into larger balls, creating opportunities for higher scores.
                Inspired by popular games <i>2048</i> and <i>Suika Game</i>.
            </Entry>

            <Entry name="Bittner Development Group"
            link="https://bittnerdev.com/"
            image="/Bittner.png"
            technologies={["React", "Ruby", "HTML", "PCAT"]}>
                Working at the Bittner Development Group, I worked on interactive textbooks for clients.
                I engineered web features and performed Quality Assurance + DevOps for over 20 interactive chapters.
                I coded questions into 5+ textbooks on Norton’s online textbook platform (PCAT) via HTML and utilized JavaScript and HTML to program 4 textbook chapters of my own.
            </Entry>
        </div>
    )
}