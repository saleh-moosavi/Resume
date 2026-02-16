import Title from "./Title";
import { Link } from "react-router-dom";
import { myProjects } from "../../constants";

export default function Projects() {
  return (
    <section>
      <Title text="Projects" />
      <div className="grid grid-cols-1 gap-4">
        {myProjects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-300 shadow rounded-lg p-3 space-y-2"
          >
            <article className="flex justify-between items-center">
              <h3 className="font-semibold text-black">{project.name}</h3>
              <div className="flex gap-3">
                {project.code_link && project.code_link !== "" && (
                  <Link
                    to={project.code_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-blue-600 underline cursor-pointer"
                  >
                    View Code
                  </Link>
                )}
                {project.demo_link && project.demo_link !== "" && (
                  <Link
                    to={project.demo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-blue-600 underline cursor-pointer"
                  >
                    Live Demo
                  </Link>
                )}
              </div>
            </article>
            <p className="text-sm text-gray-500">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
