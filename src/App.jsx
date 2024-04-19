import { MdOutlineArticle, MdOutlineEmail, MdContactPhone } from "react-icons/md";
import { FaGithub, FaJava, FaNodeJs, FaReact, FaLinkedin } from "react-icons/fa";
import { SiJavascript, SiSpring, SiPostgresql  } from "react-icons/si";
import { AiOutlineSmile } from "react-icons/ai";
import { GrMysql, GrArticle  } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { TfiUser } from "react-icons/tfi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Navbar = () => (
  <>
    <header id="header" className="flex">
      <nav id="navbar" className='navbar nav-menu my-auto'>
        <ul>
          <li><a href="#me" className="nav-link scrollto active"><AiOutlineSmile size={"1.8rem"}/> <span>Me</span></a></li>
          <li><a href="#about" className="nav-link scrollto"><TfiUser size={"1.8rem"} /> <span>About</span></a></li>
          <li><a href="#resume" className="nav-link scrollto"><GrArticle size={"1.8rem"}/> <span>Resume</span></a></li>
          <li><a href="#contact" className="nav-link scrollto"><BsTelephone size={"1.8rem"}/> <span>Contact</span></a></li>
        </ul>
      </nav>
    </header>
  </>
)

const MainSection = () => (
  <section id="me" style={{backgroundColor: 'var(--raisin-black)'}} className="text-slate-100 pt-4 pb-6 mb-6 font-caveat">
      <div className='flex flex-col justify-center align-center items-center gap-2'>

        <div className="w-32 h-32 flex items-center justify-center rounded-full bg-gray-100">
          <img className="w-full h-full object-cover rounded-full" 
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" 
            alt="Imagem de Perfil"/>
        </div>

        <div>
          <p className="text-5xl">Hi, I'm</p>
          <p className="text-7xl pl-4"><span className='italic text-green-400'>Isaque Copque!</span></p>
        </div>
      </div>
  </section>
);

const AboutSection = () => (
  <section id="about" 
    style={{backgroundColor: "var(--white)"}}
    className="flex flex-col gap-2 items-center p-2 rounded-md ring-4 ring-stone-100 mb-10">

      <p className="text-3xl font-semibold underline decoration-4 decoration-green-400">About Me</p>

      <p className="text-xl text-justify">
          I'm a computer science student interested in problem-solving.
          A quick learner, swiftly adaptable to different technologies, seeking an opportunity to join a dynamic development team and contribute to solving challenges.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit in a mass consuming state that cannot be understood by others.
      </p>

      <div className='flex flex-row items-start w-full gap-6 flex-wrap'>

        <a href='https://github.com/IsaqueCopque' target='_blank' rel='noreferrer' className='cv-button'>
          <FaGithub size={'1.4rem'} />
          github.com/IsaqueCopque
        </a>

        <div className='cv-button'>
          <MdOutlineArticle size={'1.4rem'} />
          Check out my CV
        </div>
      </div>

      <p className="text-2xl font-semibold">
        Skills
      </p>

      <div className="flex flex-row flex-wrap gap-4">
        <div className='skill-div skill-balloon'>
          <FaJava size={'3.0rem'} color='red' />
          <p>Java</p>
        </div>
        <div className='skill-div skill-balloon'>
          <SiSpring size={'3.0rem'} color='#6db33f' />
          <p>Spring</p>
        </div>
        <div className='skill-div skill-balloon'>
          <FaNodeJs size={'3.0rem'} color='#80bd00' />
          <p>NodeJS</p>
        </div>
        <div className='skill-div skill-balloon'>
          <SiJavascript size={'3.0rem'} color='#f7df1d' />
          <p>JavaScript</p>
        </div>
        <div className='skill-div skill-balloon'>
          <FaReact size={'3.0rem'} color='cyan' />
          <p>React</p>
        </div>
        <div className='skill-div skill-balloon'>
          <GrMysql size={'3.0rem'} color='#4287f5' />
          <p>MySQL</p>
        </div>
        <div className='skill-div skill-balloon'>
          <SiPostgresql size={'3.0rem'} color='#42bcf5'/>
          <p>PostgreSQL</p>
        </div>
      </div>

  </section>
);

const ResumeSection = () => (
  <section id="resume" 
    style={{backgroundColor: "var(--white)"}}
    className="flex flex-col gap-2 items-center p-2 rounded-md ring-4 ring-stone-100 mb-10">

      <p className="text-3xl font-semibold underline decoration-4 decoration-green-400">Resume</p>

      <div className="grid grid-cols-2 w-full">
        <div className="flex flex-col border-r-2 border-neutral-500 gap-2">
          <p className="text-2xl font-semibold "> Education </p>
          <div className="mr-4">
            <p className="text-lg font-semibold">Computer Science Bachelor's Degree 
            <span className="ml-4 bg-emerald-200">2019 - 2024</span></p>
            <p className="text-base font-medium">Federal University of Bahia</p>
            <p className="text-base text-justify">
              Bachelor's Thesis: EventIC: An Academic Event Recommender System for the Institute of Computing. 
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center ml-4 gap-2">
          <p className="text-2xl font-semibold"> Experience </p>
          <div>
            <p className="text-lg font-semibold">Research Intern
            <span className="ml-4 bg-emerald-200">November 2023 - Present</span></p>
            <p className="text-base font-medium">Tomorrow - Federal University of Bahia</p>
            <p className="text-base">
              Web systems back-end and front-end development with Java Spring and React.
             Relational data modeling using MySQL.</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Intern Developer
            <span className="ml-4 bg-emerald-200">September 2022 - November 2023</span></p>
            <p className="text-base font-medium">IT Superintendence - Federal University of Bahia</p>
            <p className="text-base">
            Code debugging and object-oriented programming in Java.
            Services development with Java Spring framework and PostgreSQL.</p>
          </div>
        </div>
      </div>

  </section>
);

const ContactSection = () => (
  <section id="contact"
    style={{backgroundColor: "var(--white)"}}
    className="flex flex-col gap-2 items-center p-2 rounded-md ring-4 ring-stone-100 mb-10">
    <div className='flex flex-col justify-center align-center items-center'>
      <p className="text-3xl font-semibold">Contact</p> 
      <p className="text-lg underline decoration-4 decoration-green-400">Get In Touch</p>
    </div>  

    <div className="flex justify-center w-full gap-4 flex-wrap">
        <div className="flex flex-row items-center gap-2">
          <FaMapLocationDot size={"2.0rem"} className="contact-ballon"/>
          <p className="text-lg">Salvador, Brazil</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <MdOutlineEmail size={"2.0rem"} className="contact-ballon"/>
          <p className="text-lg">isaquecopque@gmail.com</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <MdContactPhone size={"2.0rem"} className="contact-ballon"/>
          <p className="text-lg">(+55) 071 9 9723-6585</p>
        </div>
    </div>
    <div className="flex gap-6">
      <a href={"https://www.linkedin.com/in/isaque-copque/"} target='_blank' rel='noreferrer'>
        <FaLinkedin  className="social-media"/>
      </a>
      <a href={"https://github.com/IsaqueCopque"} target='_blank' rel='noreferrer'>
        <FaGithub  className="social-media"/>
      </a>
    </div>
  </section>
);
function App() {
  return (
    <div className="grid grid-cols-9" 
    style={{background: "linear-gradient(264deg, rgba(237,237,237,1) 81%, rgba(53,59,77,0.30575980392156865) 100%"}}>
      <div className="col-span-1">
        <Navbar />
      </div>
      <div className="col-span-8 mr-4">
        <MainSection />
        <AboutSection />
        <ResumeSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
