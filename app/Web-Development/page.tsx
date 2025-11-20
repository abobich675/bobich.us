import Entry from '@/components/Entry'
import Banner from '@/components/Banner'
import PortfolioDropdown from '@/components/PortfolioDropdown'
 
export default function Page() {
  return(
    <div className='px-10 xl:px-50 pt-30 pb-20'>
      <PortfolioDropdown value='WEBSITES' />

      <Entry name="Hackathon Judging Platform"
        link="/Web-Development/Beaverhacks"
        image="/Beaverhacks/1.png"
        technologies={["Next.js", "Prisma", "Typescript", "Figma"]}>
          A web-based hackathon judging and team submission platform built with Next.js and Prisma.
          This project strengthened my skills in full-stack development, database integration, and building production-ready applications in a collaborative setting.
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

      <Entry name="Food Filter"
      link="https://foodfilter.onrender.com/"
      image="/Food-Filter.png"
      technologies={["Express.js", "Google Gemini API", "Node.js"]}>
        In a 24 hour hackathon with 3 teammates, I helped create a web application to remove the clutter from bloated recipe websites.
        No longer will you have to scroll through an endless feed of life stories, popup ads, and SEO-stuffed paragraphs just to find a list of ingredients.
        Simply enter the url of a desired recipe and viola! All the important information with none of the excess.
        (Complete with calculations for a meal's nutritional information)
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