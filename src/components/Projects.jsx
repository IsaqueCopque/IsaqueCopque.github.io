import { useState } from "react";
import { FaChevronCircleRight, FaGithub, FaImage as ImageIcon} from "react-icons/fa";
import projects from "../data/projects";

function ProjectCard({title, subtitle, description, bulletPoints = [],
   github, technologies = [], architectureImage,
}) {

  const [open, setOpen] = useState(false);

  const TechnologyBadge = ({ name }) => (
  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
    {name}
  </span>
  );

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
      >
        <div className="flex items-center gap-3">
          <FaChevronCircleRight
            size={22}
            className={`transition-transform duration-300 ${
              open ? "rotate-90" : ""
            }`}
          />

          <div>
            <h3 className="text-lg font-semibold text-slate-800">
              {title}
            </h3>

            {subtitle && (
              <p className="text-sm text-slate-500">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-slate-200 px-6 py-6 space-y-6">

            <div>
              <h4 className="font-semibold text-slate-800 mb-2">
                Description
              </h4>

              <p className="leading-7 text-slate-600">
                {description}
              </p>

              <ul className="list-disc ml-4 mt-2">
                {bulletPoints.map((item,index)=> <li key={index} className="text-base leading-7 text-slate-600">{item}</li>)}
              </ul>          

            </div>

            <div>
              <h4 className="font-semibold text-slate-800 mb-2">
                Repository
              </h4>

              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:underline"
              >
                <FaGithub size={18} />
                View on GitHub
              </a>
            </div>

            <div>
              <h4 className="font-semibold text-slate-800 mb-2">
                Technologies
              </h4>

              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <TechnologyBadge
                    key={tech}
                    name={tech}
                  />
                ))}
              </div>
            </div>

            {architectureImage && (
              <div>
                <h4 className="flex items-center gap-2 font-semibold text-slate-800 mb-3">
                  <ImageIcon size={18} />
                  Architecture
                </h4>

                <img
                  src={architectureImage}
                  alt={`${title} architecture`}
                  className="rounded-lg border border-slate-200 shadow-sm"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const ProjectsSection = () => {

  return (
    <section id="projects"
      style={{ backgroundColor: "var(--white)" }}
      className="flex flex-col gap-2 items-center p-2 rounded-md ring-4 ring-stone-100 mb-10">

      <div className="mb-4">
        <p className="text-4xl font-semibold font-caveat"
          style={{ marginBottom: '-5px' }}>Projects</p>
        <div style={{ borderBottom: '4px solid', borderColor: 'rgb(74 222 128)', marginBottom: '-5px', width: '100%', height: '1px' }}></div>
      </div>

      {
        projects.map((project,index) => 
          <ProjectCard 
            key={index}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            bulletPoints={project.bulletPoints}
            github={project.github}
            technologies={project.technologies}
            architectureImage={project.architectureImage}
          />
        )
      }

    </section>
  )
};

export default ProjectsSection;