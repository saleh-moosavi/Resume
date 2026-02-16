import Title from "./Title";
import { myJobs } from "../../constants";

export default function Jobs() {
  return (
    <section>
      <Title text="Work Experience" />
      <div className="space-y-5">
        {myJobs.map((job, index) => (
          <div
            key={"job" + index}
            className="border-gray-300 shadow border p-3 rounded-lg"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-black">{job.title}</h3>
              <p className="text-xs font-semibold text-black">{job.date}</p>
            </div>
            <p className="text-sm text-black font-semibold mt-1">
              {job.company} - {job.time} ({job.type})
            </p>
            <ul className="mt-3 space-y-2">
              {job.description.map((task, taskIndex) => (
                <li
                  key={taskIndex}
                  className="text-sm text-gray-600 flex items-start text-justify"
                >
                  <span className="mr-2">•</span>
                  {task}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
