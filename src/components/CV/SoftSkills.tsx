import Title from "./Title";

export default function SoftSkills({ softSkills }: { softSkills: string[] }) {
  return (
    <section>
      <Title text="Soft Skills" />
      <div className="flex flex-col gap-1">
        {softSkills.map((skill, index) => (
          <span key={index} className="text-gray-500 text-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
