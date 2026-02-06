import { FaGithub, FaJava, FaNodeJs, FaReact} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { MdOutlineArticle } from "react-icons/md";
import { SiJavascript, SiPostgresql, SiSpring, SiFlutter } from "react-icons/si";
import Slider from "react-slick";
import CV from '../assets/IsaqueCopque.pdf';

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const AboutSection = () =>{

 return (
  <section id="about" 
    style={{backgroundColor: "var(--white)"}}
    className="flex flex-col gap-2 items-center p-2 rounded-md ring-4 ring-stone-100 mb-10">

      <p className="text-4xl font-semibold underline decoration-4 decoration-green-400 font-caveat">About Me</p>

      <p className="text-xl text-justify ml-2">
        I'm a 24-year-old Brazilian computer scientist with a bachelor’s degree in Computer Science and currently pursuing a <span className="font-bold">master’s degree in Computer Science</span> at the Federal University of Bahia.
        I enjoy problem-solving and venturing into diverse technologies. 
        Curious by nature, I like experimenting with new ideas and approaches to achieve efficient and creative solutions. 
        My research focuses on recommendation systems, with an emphasis on action recommendation for smart home automation.
      </p>
      <p className="text-xl text-justify ml-2">
      Throughout my professional and academic journey, I have developed software solutions through research projects, internships, and teaching experiences.
      I have worked with technologies such as <span className="underline decoration-green-500">Java, Node.js, React, Flutter, Python, MySQL, and PostgreSQL</span>. In addition to development, I have teaching experience 
      as a programming logic monitor in C++ for high school students, as well as an assistant teacher in programming courses.
      </p>

       <p className="text-xl text-justify ml-2">
        I have investigated the application of machine learning methods in research projects
        conducted in partnership with industry, contributing to scientific advancement in 
        <span className="font-bold"> Recommendation Systems</span>, <span className="font-bold">IoT</span>, <span className="font-bold">Intelligent Environments</span>, and <span className="font-bold">Software Engineering</span>.
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
            <SiFlutter size={'3.0rem'} color='cyan' />
            <p>Flutter</p>
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

export default AboutSection;