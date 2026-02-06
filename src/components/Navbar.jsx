import { AiOutlineSmile } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { GrArticle } from "react-icons/gr";
import { TfiUser } from "react-icons/tfi";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

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

export default Navbar;