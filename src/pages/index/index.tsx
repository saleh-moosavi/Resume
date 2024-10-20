import Info from "./Info";
import Portfolio from "./Portfolio";

export default function Index() {
  return (
    <div className="bg-black dark:bg-white dark:text-black text-white">
      <Info />
      <Portfolio/>
    </div>
  );
}
