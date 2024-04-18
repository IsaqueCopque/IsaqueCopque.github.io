import './App.css';
import { MdOutlineArticle } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const Navbar = () => (
  <>
    <header id="header" className="flex">
      <nav id="navbar" className='navbar nav-menu my-auto'>
        <ul>
          <li><a href="#me" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Me</span></a></li>
          <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
          <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
          <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
        </ul>
      </nav>
    </header>
  </>
)

const MainSection = () => (
  <section id="me" style={{backgroundColor: 'var(--raisin-black)'}} className="text-slate-100 pt-4 pb-6 mb-2">
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
    className="flex flex-col gap-2 items-center p-2 rounded-md">

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

  </section>
);

const ContactSection = () => (
  <section id="contact">
    <h3> Contact</h3>
    <small>Get In Touch</small>
  </section>
);
function App() {
  return (
    <div className="grid grid-cols-9 h-screen" 
    style={{background: "linear-gradient(264deg, rgba(237,237,237,1) 81%, rgba(53,59,77,0.30575980392156865) 100%"}}>
      <div className="col-span-1">
        <Navbar />
      </div>
      <div className="col-span-8 mr-4">
        <MainSection />
        <AboutSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
