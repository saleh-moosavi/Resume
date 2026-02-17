import { useRef, useState } from "react";
import CV from "../components/about/CVMode";
import Skills from "../components/about/Skills";
import { useReactToPrint } from "react-to-print";
import Experience from "../components/about/Experience";
import SoftSkills from "../components/about/SoftSkills";
import ContentWrapper from "../components/about/ContentWrapper";

export default function AboutIndex() {
  const [isCV, setIsCV] = useState(false);
  const cvRef = useRef<HTMLDivElement>(null);

  const toggleIsCV = () => {
    setIsCV((prev) => !prev);
  };

  const handlePrint = useReactToPrint({
    contentRef: cvRef,
    documentTitle: "Seyed_Saleh_Moosavi_CV",
    pageStyle: `
      @page {
        size: auto;
        margin: 0;
      }
      
      @media print {
        /* Remove screen-only styles */
        .my-20 {
          margin-top: 0 !important;
          margin-bottom: 0 !important;
        }
      }
    `,
  });

  return (
    <>
      <article className="fixed bottom-5 right-5 space-y-2 grid">
        {isCV && (
          <button
            onClick={handlePrint}
            className="p-2 bg-white rounded-lg text-black text-xs font-semibold animate-pulse"
          >
            Download
          </button>
        )}
        <button
          onClick={toggleIsCV}
          className="p-2 bg-white rounded-lg text-black text-xs font-semibold animate-pulse"
        >
          {isCV ? "Normal" : "CV"}
        </button>
      </article>
      {isCV ? (
        <div
          ref={cvRef}
          className="max-w-4xl mx-auto bg-stone-200 rounded-lg my-20 p-10"
        >
          <CV />
        </div>
      ) : (
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
      )}
    </>
  );
}
