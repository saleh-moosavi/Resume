import Title from "./Title";
import { myLinks } from "../../constants";

export default function Links() {
  return (
    <section>
      <Title text="Links" />
      <div className="space-y-5">
        {myLinks.map((link, index) => (
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
