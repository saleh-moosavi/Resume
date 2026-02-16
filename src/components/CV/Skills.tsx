import Title from "./Title";

export default function Skills({ skills }: { skills: string[] }) {
  return (
    <section>
      <Title text="Skills" />
      <div className="flex flex-col gap-5">
        {skills.map((skill, index) => (
          <p key={index} className="font-semibold text-black text-sm">
            {skill}
          </p>
        ))}
      </div>
    </section>
  );
}
