import { AboutSection, BannerSection, ContactSection, Navbar, ResumeSection } from "./components";
import Chat from "./components/chat/Chat";
import ProjectsSection from "./components/Projects";

function App() {

  return (
    <div className="grid grid-cols-9"
      style={{ background: "linear-gradient(264deg, rgba(237,237,237,1) 81%, rgba(53,59,77,0.30575980392156865) 100%" }}>
      
      <div className="hidden lg:block lg:col-span-1">
        <Navbar />
      </div>

      <Chat/>

      <div className="col-span-9 lg:col-span-8 lg:mr-4">
        <BannerSection />
        <AboutSection />
        <ResumeSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
