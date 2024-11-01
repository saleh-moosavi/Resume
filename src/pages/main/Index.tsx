import Info from "./Info";
import Portfolio from "./Portfolio";

export default function Index(props: { isDark: boolean }) {
  return (
    <div className="">
      <Info />
      <Portfolio isDark={props.isDark} />
    </div>
  );
}
