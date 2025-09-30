import Skills from "../components/about/Skills";
import Experience from "../components/about/Experience";
import SoftSkills from "../components/about/SoftSkills";
import ContentWrapper from "../components/about/ContentWrapper";

export default function AboutIndex() {
  return (
    <div className="grid lg:grid-cols-2 gap-y-10 justify-items-center items-start gap-x-5 pt-20 pb-10 px-5 min-h-screen max-w-7xl mx-auto">
      <ContentWrapper title="Experience">
        <Experience />
      </ContentWrapper>
      <section className="w-full flex flex-col gap-10 lg:gap-24 max-w-[35rem]">
        <ContentWrapper title="Languages & Tools">
          <Skills />
        </ContentWrapper>
        <ContentWrapper title="Soft Skills">
          <SoftSkills />
        </ContentWrapper>
      </section>
    </div>
  );
}
