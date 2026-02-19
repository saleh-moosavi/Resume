import { myInfo } from "../../constants";

export default function HeaderTitle() {
  return (
    <div className="text-center space-y-2 mb-10">
      <h1 className="text-3xl font-bold text-gray-900">{myInfo.name}</h1>
      <p className="text-xl text-gray-600 font-semibold">{myInfo.job_title}</p>
    </div>
  );
}
