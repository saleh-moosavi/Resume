import Title from "./Title";
import { myContactInfo } from "../../constants";

export default function Details() {
  return (
    <section>
      <Title text="Contact" />
      <div className="space-y-5">
        {myContactInfo.map((detail, index) => (
          <div key={index} className="space-y-1">
            <p className="text-sm font-semibold text-black">{detail.title}</p>
            <p className="text-xs font-semibold text-gray-500">
              {detail.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
