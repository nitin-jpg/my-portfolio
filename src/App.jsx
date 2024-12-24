
import { About } from "./components/About"
import Contact from "./components/contact"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Myskills from "./components/Myskills"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="h-fit w-fit">
      <div className="fixed top- -z-10 h-full w-full ">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" style={{width:'100%', height:'100%'}}></div>
      </div>
      <div className="container mx-auto px-6 w-full">
        <navbar/>
        <div className="container mx-auto px-6 w-full">
        <Navbar/>
        <Hero/>

   
   
   
        
    <section id="About" className="">
          <About />
        </section>
        
        <section>
          <Myskills/>
        </section>

        <section id="experience" className="">
          <Experience />
        </section>
        
        <section id="contact" className="">
          <Contact />
        </section>
      </div>
    
    </div>
    

    </div>
 
  )
}

export default App