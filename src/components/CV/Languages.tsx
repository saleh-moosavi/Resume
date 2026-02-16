import Title from "./Title";

interface ILanguage {
  name: string;
  level: string;
}

export default function Languages({ languages }: { languages: ILanguage[] }) {
  return (
    <section>
      <Title text="Languages" />
      <div className="space-y-2">
        {languages.map((language, index) => (
          <div key={index} className="flex justify-between">
            <span className="text-sm text-black font-semibold">
              {language.name}
            </span>
            <span className="text-sm text-gray-500 font-semibold">
              {language.level}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
