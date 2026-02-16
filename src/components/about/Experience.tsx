import { myJobs } from "../../constants";

export default function Experience() {
  return (
    <section className="space-y-5">
      {myJobs.map((item, index) => (
        <article
          key={"job" + index}
          className="bg-my-lightgray dark:bg-my-darkgray p-5 rounded-lg space-y-2"
        >
          <section className="flex items-center justify-between">
            <h3 className="font-bold text-md">{item.title}</h3>
            <p className="text-sm">{item.date}</p>
          </section>
          <p className="text-sm">
            {item.company} - {item.time} ( {item.type} )
          </p>
          <hr className="pb-2 border-my-lightpurple" />
          {item.description.map((desc, index) => (
            <p className="text-sm text-justify" key={index}>
              {desc}
            </p>
          ))}
          <p></p>
        </article>
      ))}
    </section>
  );
}
