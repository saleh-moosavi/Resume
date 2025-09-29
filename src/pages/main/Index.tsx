import Info from "./Info";
import Portfolio from "./Portfolio";

export default function Index(props: { isDark: boolean }) {
  return (
    <>
      <Info />
      <Portfolio isDark={props.isDark} />
    </>
  );
}
