import { FaLink } from "react-icons/fa";
const ResumeSection = () => {

  const experiences = [
    { title: "Developer", period: "April 2025 - Present", company: "IT Superintendence – Federal University of Bahia", bullets: ["Adapted and developed new features for institutional web systems, including data modeling with Java and PostgreSQL, enabling the unification of previously separate systems.", "Identified and fixed functional bugs and performance bottlenecks through code refactoring and algorithm optimization, restoring system functionality and reducing response times."] },
    { title: "Researcher", period: "November 2024 - 2025", company: "ARGUS", bullets: ["Researched and applied machine learning and recommender system techniques using Python to design models capable of recommending automated actions in smart home environments.", "Integrated the recommendation engine into a mobile smart home application, connecting backend models with the client using Python, Flutter, and MongoDB, enabling in-app delivery of personalized recommendations."] },
    { title: "Research Intern", period: "November 2023 - 2024", company: "Tomorrow", bullets: ["Led a team of intern developers in the design and implementation of an academic web platform using Java Spring and React, successfully delivering a system to support an ongoing research project.", "Designed the relational data model and migrated academic data from spreadsheets to a MySQL database, resulting in structured, efficient, and scalable data storage."] },
    { title: "Intern Developer", period: "September 2022 - 2023", company: "IT Superintendence – Federal University of Bahia", bullets: ["Debugged and refactored Java codebases and developed backend services with Java Spring and PostgreSQL, restoring broken functionalities and delivering pending institutional services."] },
  ];

  const LanguageProficiency = ({name, percent, level}) =>
  <><div className="flex flex-col gap-1 w-auto">
    <p className="text-lg font-semibold ml-4">{name}</p>
    <div className="border-2 border-slate-400 bg-slate-300 mx-full rounded-full">
      <div className="bg-emerald-300 h-10 rounded-full overflow-hidden" style={{ width: `${percent}%` }}></div>
    </div>
    <p className="text-lg font-semibold flex justify-end mr-4">{level}</p>
  </div></>;

  return (
    <section id="resume"
      style={{ backgroundColor: "var(--white)" }}
      className="flex flex-col gap-2 items-center p-2 rounded-md ring-4 ring-stone-100 mb-10">

      <div className="mb-4">
        <p className="text-4xl font-semibold font-caveat"
          style={{ marginBottom: '-5px' }}>Resume</p>
        <div style={{ borderBottom: '4px solid', borderColor: 'rgb(74 222 128)', marginBottom: '-5px', width: '100%', height: '1px' }}></div>
      </div>
      <div className="resume-container">
        <div className="resume-education-container">
          <p className="text-2xl font-semibold "> Education </p>

          <div className="mr-4">
            <p className="text-lg font-semibold">Master of Science in Computer Science
              <span className="ml-4 bg-emerald-200">2024 - 2026</span></p>
            <p className="text-base font-medium">Federal University of Bahia</p>
            <p className="text-base text-justify">
              Master’s Dissertation: Recommending Smart Home Automation Scenes with Context-Aware Recommender System
            </p>
          </div>

          <div className="mr-4">
            <p className="text-lg font-semibold">Computer Science Bachelor's Degree
              <span className="ml-4 bg-emerald-200">2019 - 2024</span></p>
            <p className="text-base font-medium">Federal University of Bahia</p>
            <p className="text-base text-justify">
              Bachelor's Thesis: EventIC: An Academic Event Recommender System for the Institute of Computing.
            </p>
          </div>

          <p className="text-2xl font-semibold mt-2"> Publications </p>

          <ul className="list-disc ml-4">
            <li className="text-base">
              <span className="font-medium">
                HESTIA: A Home Environment Simulator Targeting Inhabitant Activities
              </span>
              <a
                href="https://doi.org/10.36227/techrxiv.173888093.30111102/v2"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center text-emerald-600 hover:underline"
                aria-label="View publication"
              >
                <FaLink />
              </a>
            </li>
            <li className="text-base">
              <span className="font-medium">
                From Elicitation Interviews to Software Requirements: Evaluating LLM Performance in Requirement Generation
              </span>
              <a
                href="https://doi.org/10.29327/1588952.28-12"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center text-emerald-600 hover:underline"
                aria-label="View publication"
              >
                <FaLink />
              </a>
            </li>
          </ul>

          <p className="text-2xl font-semibold mt-2 mb-2"> Languages </p>

          <div className="grid grid-cols-2">
            <LanguageProficiency name={"Portuguese"} percent={100} level={"Native"} />
          </div>
          <div className="grid grid-cols-2">
            <LanguageProficiency name={"English"} percent={66} level={"B2"} />
          </div>

        </div>

        <div className="resume-experience-container">
          <p className="text-2xl font-semibold"> Experience </p>

          {experiences.map(exp =>
            <div>
              <p className="text-lg font-semibold">{exp.title}
                <span className="ml-4 bg-emerald-200">{exp.period}</span></p>
              <p className="text-base font-medium">{exp.company}</p>
              <ul className="list-disc ml-2">
                {exp.bullets.map(bullet =>
                  <li>
                    <p className="text-base">{bullet}</p>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>

    </section>
  )
};

export default ResumeSection;