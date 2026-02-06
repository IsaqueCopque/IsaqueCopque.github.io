import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdContactPhone, MdOutlineEmail } from "react-icons/md";

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
          <p className="text-lg">(+55) 71 9 9723-6585</p>
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

export default ContactSection;