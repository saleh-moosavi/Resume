import Title from "./Title";
import { myInfo } from "../../constants";

export default function Profile() {
  return (
    <section>
      <Title text="About Me" />
      <p className="text-sm text-gray-500 font-semibold text-justify">
        {myInfo.profile}
      </p>
    </section>
  );
}
