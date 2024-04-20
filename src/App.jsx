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
import CV from './assets/IsaqueCopque.pdf';

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
  <section id="me" style={{backgroundColor: 'var(--raisin-black)'}} className="pt-4 pb-6 mb-6">
      <div className='flex flex-col justify-center align-center items-center gap-2'>

          <img className="w-48 h-48 rounded-full" style={{borderRadius: "50%"}}
            src="/me.jpg" 
            alt="Profile"/>

        <div className="text-slate-100 font-caveat">
          <p className="text-5xl">Hi, I'm</p>
          <p className="text-7xl pl-4"><span className='text-green-400'>Isaque Copque!</span></p>
        </div>
      </div>
  </section>
);

const AboutSection = () =>{

 return (
  <section id="about" 
    style={{backgroundColor: "var(--white)"}}
    className="flex flex-col gap-2 items-center p-2 rounded-md ring-4 ring-stone-100 mb-10">

      <p className="text-4xl font-semibold underline decoration-4 decoration-green-400 font-caveat">About Me</p>

      <p className="text-xl text-justify ml-2">
        I'm a Brazilian 22-year-old computer science student currently concluding my bachelor's degree at the
        Federal University of Bahia. I enjoy problem-solving and venturing into diverse technologies.
        I consider myself a curious person who likes to try new things and explore different approaches to reach goals. Web systems and recommender systems are the topics that interest me the most.
      </p>
      <p className="text-xl text-justify ml-2">
      In my academic journey, I have had experience in developing software solutions through internships, research projects, 
      and academic assignments, working with technologies such as Java, Node.js, React, MySQL, and PostgreSQL.
       I also experienced being a monitor for teaching programming logic in C++ to high school students.
      </p>

      <p className="text-3xl font-semibold font-caveat">
        Skills
      </p>

      <div className="w-full  flex justify-center">
      <Slider dots={false} slidesToShow={5} arrows={false} infinite={true} 
        centerMode={true} centerPadding={'0px'} edgeFriction={0}
        autoplay={true} autoplaySpeed={2200} responsive={[
          {breakpoint:950,
            settings:{slidesToShow: 3, autoplaySpeed: 1500},
          },
          {breakpoint:600,
            settings:{slidesToShow: 2, autoplaySpeed: 900, speed: 1000}
          }
        ]}
        className="w-3/4">
        <div>
          <div className='skill-div skill-balloon'>
            <FaJava size={'3.0rem'} color='red' />
            <p>Java</p>
          </div>
        </div>

        <div>
          <div className='skill-div skill-balloon'>
            <SiSpring size={'3.0rem'} color='#6db33f' />
            <p>Spring</p>
          </div>
        </div>

        <div>
          <div className='skill-div skill-balloon'>
            <FaNodeJs size={'3.0rem'} color='#80bd00' />
            <p>NodeJS</p>
          </div>
        </div>

        <div>
          <div className='skill-div skill-balloon'>
            <SiJavascript size={'3.0rem'} color='#f7df1d' />
            <p>JavaScript</p>
          </div>
        </div>

        <div>
          <div className='skill-div skill-balloon'>
            <FaReact size={'3.0rem'} color='cyan' />
            <p>React</p>
          </div>
        </div>

        <div>
          <div className='skill-div skill-balloon'>
            <GrMysql size={'3.0rem'} color='#4287f5' />
            <p>MySQL</p>
          </div>
        </div>

        <div>
          <div className='skill-div skill-balloon'>
            <SiPostgresql size={'3.0rem'} color='#42bcf5'/>
            <p>PostgreSQL</p>
          </div>
        </div>
      </Slider>
      </div>

      <div className='flex flex-row items-start w-full mt-4 gap-6 flex-wrap'>

        <a href='https://github.com/IsaqueCopque' target='_blank' rel='noreferrer' className='cv-button'>
          <FaGithub size={'1.4rem'} />
          github.com/IsaqueCopque
        </a>

        <a href={CV} download={"Isaque Copque"} target="_blank" rel="noreferrer">
        <div className='cv-button'>
          <MdOutlineArticle size={'1.4rem'} />
          Check out my CV
        </div>
        </a>
      </div>

  </section>
);
}

const ResumeSection = () => (
  <section id="resume" 
    style={{backgroundColor: "var(--white)"}}
    className="flex flex-col gap-2 items-center p-2 rounded-md ring-4 ring-stone-100 mb-10">

      <div className="mb-4">
        <p className="text-4xl font-semibold font-caveat" 
        style={{marginBottom:'-5px'}}>Resume</p>
        <div style={{ borderBottom: '4px solid', borderColor: 'rgb(74 222 128)', marginBottom: '-5px',width: '100%', height:'1px'}}></div>
      </div>

      <div className="grid grid-cols-2 w-full">
        <div className="flex flex-col flex-wrap border-r-2 border-neutral-500 gap-2">
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

        <div className="flex flex-col flex-wrap justify-center ml-4 gap-2">
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
            <span className="ml-4 bg-emerald-200 ">September 2022 - November 2023</span></p>
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
      <p className="text-4xl font-semibold font-caveat">Contact</p> 
      <p className="text-2xl underline decoration-4 decoration-green-400 font-caveat">Get In Touch</p>
    </div>  

    <div className="flex justify-center w-full gap-4 flex-wrap font-monteserrat font-medium">
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
