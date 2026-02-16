import Title from "./Title";

interface IDetail {
  title: string;
  description: string;
}

export default function Details({ details }: { details: IDetail[] }) {
  return (
    <section>
      <Title text="Details" />
      <div className="space-y-5">
        {details.map((detail, index) => (
          <div key={index} className="space-y-1">
            <p className="text-sm font-semibold text-black">{detail.title}</p>
            <p className="text-sm font-semibold text-gray-500">
              {detail.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
