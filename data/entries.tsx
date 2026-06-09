export type Category = "Machine-Learning" | "Visualizations" | "Game-Development" | "Web-Development" | "Other";

export type EntryData = {
    name: string;
    link?: string;
    targetBlank?: boolean;
    images: string[];
    displayImage?: string;
    technologies?: string[];
    abstract?: string;
    category?: Category; 
};

export const ENTRY_ORDER = [
    "MI Attack",
    "Algorithmic Trading",
    "Wildfires",
    "PGD",
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
    "Bittner",
] as const;

export const ENTRIES: Record<string, EntryData> = {
"MI Attack":
{
    name: "Membership Inference Attack",
    link: "Machine-Learning/MI-Attack",
    images: ["/MI-Attack/1.png", "/MI-Attack/2.png", "/MI-Attack/3.png"],
    displayImage: "/MI-Attack/2.png",
    technologies: ["Pytorch", "High Performance Computing", "SLURM"],
    abstract: "A replication of the landmark 2017 membership inference attack against machine learning models. \
        By training shadow models that mimic a target neural network, an attack classifier learns to distinguish members from non-members using only confidence vectors.",
    category: "Machine-Learning"
},
"Algorithmic Trading":
{
    name: "Algorithmic Trading Strategies",
    link: "Other/Algorithmic-Trading",
    images: ["/Algorithmic-Trading.png"],
    displayImage: "/Algorithmic-Trading.png",
    technologies: ["Python", "Docker", "Github"],
    abstract: "A suite of tools for building, tuning, and backtesting automated trading strategies. \
        The system allows configurable buy/sell rules to be composed into strategies and validated against historical market data.",
    category: "Other"
},
"Wildfires":
{
    name: "Oregon Wildfires",
    link: "Visualizations/Wildfires",
    images: ["/Wildfires/1.png", "/Wildfires/2.png", "/Wildfires/3.png"],
    displayImage: "/Wildfires/1.png",
    technologies: ["Gephi", "Matplotlib", "ArcGIS"],
    abstract: "An observational analysis of Oregon wildfire data visualized through networks, interactive county maps, and charts. \
        Findings include that fire frequency has remained broadly stable while acres burned has grown substantially, suggesting genuine increases in severity rather than improved detection.",
    category: "Visualizations"
},
"PGD": {
    name: "Projected Gradient Descent Attack",
    link: "Machine-Learning/PGD",
    images: ["/PGD/1.png", "/PGD/2.png", "/PGD/3.png"],
    displayImage: "/PGD/1.png",
    technologies: ["PyTorch", "High Performance Computing", "SLURM"],
    abstract: "An implementation and analysis of PGD adversarial attacks on image classifiers. By iteratively perturbing inputs within a bounded ε-ball, the attack reliably fools undefended models. Training models on these attack-generated examples produces models robust to PGD with minimal clean accuracy sacrifice.",
    category: "Machine-Learning"
},

"Hackathon": {
    name: "Hackathon Judging Platform",
    link: "/Web-Development/Beaverhacks",
    images: ["/Beaverhacks/1.png", "/Beaverhacks/2.png", "/Beaverhacks/3.png"],
    displayImage: "/Beaverhacks/1.png",
    technologies: ["Next.js", "Prisma", "TypeScript", "Figma"],
    abstract: "A web-based hackathon platform for judging and submission. This project strengthened my skills in full-stack development, database integration, and building production-ready applications in a collaborative setting.",
    category: "Web-Development"
},

"ASCII": {
    name: "ASCII Art Generator",
    link: "/Other/Artsii",
    images: ["/Artsii/HomeScreen.png", "/Artsii/1.png", "/Artsii/2.png"],
    displayImage: "/Artsii/1.png",
    technologies: ["Python", "Next.js", "Google Cloud Services", "Google Gemini Imagen API"],
    abstract: "A creative web app built in just 24 hours that transforms images into retro-style ASCII art. This project features AI image generation, conversions from image to text-based renderings, and a communal gallery to share your creations.",
    category: "Other"
},

"Ant": {
    name: "Ant Simulation",
    link: "/Other/Ant-Simulation",
    images: ["/Ants/Slow.gif", "/Ants/Fast.gif"],
    displayImage: "/Ants/1.png",
    technologies: ["Unity", "Parallel Programming", "GPU Programming", "Compute Shaders (HLSL)"],
    abstract: "A GPU-accelerated ant colony simulation powered by Unity compute shaders. Implemented pheromone dynamics with decay, diffusion, and reinforcement across multiple channels to enable large-scale, real-time trail formation and swarm behaviors.",
    category: "Visualizations"
},

"Minecraft": {
    name: "Minecraft Web Development Mod",
    link: "/Web-Development/Minecraft",
    images: ["/Minecraft-Web-Dev.png"],
    displayImage: "/Minecraft-Web-Dev-Site.png",
    technologies: ["Java", "Java Socket Programming", "Minecraft Fabric API", "TCP/IP"],
    abstract: "A Fabric mod for Minecraft that enables in-game TCP networking and web hosting. Leveraging low-level socket programming, the mod establishes TCP connections from within the game environment and allows players to serve custom websites from inside Minecraft.",
    category: "Web-Development"
},

"CharismaBot": {
    name: "CharismaBot Speaker-Listener Web AI",
    link: "https://github.com/imshrirangpatil/speaker-listener-web-ai",
    targetBlank: true,
    images: [],
    displayImage: "/Charisma.png",
    technologies: ["Python", "Socket.IO", "HTML", "JavaScript"],
    abstract: "CharismaBot is a conversational AI system that I helped build as undergraduate research with Charisma Robotics Lab. It implements the Speaker-Listener Technique using voice input, emotion detection, and large language models.",
    category: "Web-Development"
},

"Ribbit Royale": {
    name: "Ribbit Royale",
    link: "/Game-Development/Ribbit-Royale",
    images: ["/Ribbit-Royale/Ribbit-Royale.jpeg", "/Ribbit-Royale/Lickity-Split.gif", "/Ribbit-Royale/Swamp-Spotting.gif"],
    displayImage: "/Ribbit-Royale/Ribbit-Royale.jpeg",
    technologies: ["Unity Game Engine", ".NET Multiplayer Framework", "C#"],
    abstract: "A whimsical multiplayer party game designed to bring players together through fun, competitive minigames. Players swing with their tongues, admire swamp wildlife, and evade dangerous snakes in a frog-themed adventure.",
    category: "Game-Development"
},

"Rhombus Tiling": {
    name: "Rhombus Tiling",
    link: "/Visualizations/Rhombus-Tiling",
    images: ["/Rhombus-Tiling/Concept.png", "/Rhombus-Tiling/1.png", "/Rhombus-Tiling/2.png"],
    displayImage: "/Rhombus-Tiling/1.png",
    technologies: ["OpenGL"],
    abstract: "An interactive visualization of a mathematical concept involving rhombus tilings and rotation. Users manipulate groups of rhombuses in 2D to add or remove cubes from a corresponding 3D isometric structure in real time.",
    category: "Visualizations"
},

"Food Filter": {
    name: "Food Filter",
    link: "https://foodfilter.onrender.com/",
    targetBlank: true,
    images: [],
    displayImage: "/Food-Filter.png",
    technologies: ["Express.js", "Google Gemini API", "Node.js"],
    abstract: "Built during a 24-hour hackathon, Food Filter removes clutter from recipe websites. Users provide a recipe URL and receive only the essential information—ingredients, instructions, and key details—without ads or lengthy stories.",
    category: "Web-Development"
},

"Tree Generation": {
    name: "Tree Generation",
    link: "/Visualizations/Trees",
    images: ["/Tree-Gen/1.png", "/Tree-Gen/2.png", "/Tree-Gen/3.png"],
    displayImage: "/Tree-Gen/1.png",
    technologies: ["Unity Game Engine", "C#"],
    abstract: "A procedural tree generator that creates unique randomized trees using recursive systems. Adjustable branching patterns and deviation angles allow exploration of both fractal and natural-looking structures.",
    category: "Visualizations"
},

"Graph Visualization": {
    name: "Graph Visualization",
    link: "/Visualizations/Graphs",
    images: ["/Graphs/1.png", "/Graphs/3D.gif"],
    displayImage: "/Graphs/1.png",
    technologies: ["Unity Game Engine", "C#"],
    abstract: "A physics-based graph visualization system supporting both 2D and 3D layouts. Attractive and repulsive forces dynamically organize nodes into clear and coherent graph structures.",
    category: "Visualizations"
},

"Pokemon": {
    name: "Pokemon #00B6D5",
    link: "/Game-Development/Pokemon",
    images: ["/Pokemon/Cover2.png", "/Pokemon/Battle.png", "/Pokemon/Full-Weezer.png"],
    displayImage: "/Pokemon/Battle.png",
    technologies: ["Unity Game Engine", "C#"],
    abstract: "A one-on-one Pokémon battle experience where players face the legendary alt-rock band Weezer. The game combines strategic turn-based combat, pixel-art aesthetics, and humorous band-themed encounters.",
    category: "Game-Development"
},

"2048": {
    name: "2048 Rotate",
    link: "Game-Development/2048-Rotate",
    images: ["/2048-Rotate.png"],
    technologies: ["Unity Game Engine", "C#"],
    abstract: "A relaxing puzzle game where balls merge and grow when they collide. Players manipulate gravity itself to guide the balls and achieve higher scores, inspired by 2048 and Suika Game.",
    category: "Game-Development"
},

"Bittner": {
    name: "Bittner Development Group",
    link: "https://bittnerdev.com/",
    targetBlank: true,
    images: [],
    displayImage: "/Bittner.png",
    technologies: ["React", "Ruby", "HTML", "PCAT"],
    abstract: "At Bittner Development Group, I developed interactive educational content for more than nine Norton textbooks used by tens of thousands of students. I also contributed web features, QA processes, and DevOps workflows across more than twenty interactive chapters.",
    category: "Web-Development"
}
}