import Entry from '@/components/Entry'
import Banner from '@/components/Banner'
 
export default function Page() {
  return(
  <>
    <Banner image='/Web-Development-Banner.png' textColor='text-gray-100'>
      Visualizations
    </Banner>    

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

    <Entry name="Web Development Class"
    image="/Handlebars.png"
    technologies={["Node.js", "Handlebars.js", "HTML", "JavaScript", "CSS"]}>
      In my Oregon State University Web Development and Introduction to Databases classes, I designed 8 websites.
      These websites were originally designed using only HTML, but grew to use increasing amounts of JavaScript and eventually incorperated dynamic content via Handlebars.js.
    </Entry>

    <br />
    <br />
    
  </>
  )
}