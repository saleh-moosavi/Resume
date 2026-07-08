import Title from "./Title";
import { Link } from "react-router-dom";
import { portfolio } from "../../constants";

export default function Projects() {
  return (
    <section>
      <Title text="Projects" />
      <div className="grid grid-cols-1 gap-4">
        {portfolio.map((project, index) => {
          if (project.isForCV)
            return (
              <div
                key={"project-" + index + ":" + project.title}
                className="border border-gray-300 shadow rounded-lg p-3 space-y-2"
              >
                <article className="flex justify-between items-center">
                  <h3 className="font-semibold text-black">{project.title}</h3>
                  <div className="flex gap-3">
                    {project.codeLink && project.codeLink !== "" && (
                      <Link
                        to={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-blue-600 underline cursor-pointer"
                      >
                        View Code
                      </Link>
                    )}
                    {project.demoLink && project.demoLink !== "" && (
                      <Link
                        to={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-blue-600 underline cursor-pointer"
                      >
                        Live Demo
                      </Link>
                    )}
                  </div>
                </article>
                <p className="text-sm text-gray-500">{project.cv_desc}</p>
              </div>
            );
          return null;
        })}
      </div>
    </section>
  );
}
