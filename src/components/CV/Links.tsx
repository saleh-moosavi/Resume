import Title from "./Title";

interface ILink {
  title: string;
  url: string;
}

export default function Links({ links }: { links: ILink[] }) {
  return (
    <section>
      <Title text="Links" />
      <div className="space-y-5">
        {links.map((link, index) => (
          <div key={index}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-700 font-semibold underline"
            >
              {link.title}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
