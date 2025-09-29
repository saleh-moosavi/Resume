import Info from "../components/main/Info";
import Portfolio from "../components/main/Portfolio";

export default function Index(props: { isDark: boolean }) {
  return (
    <>
      <Info />
      <Portfolio isDark={props.isDark} />
    </>
  );
}
