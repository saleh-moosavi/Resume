import { useRef } from "react";
import CV from "../components/about/CVMode";
import Skills from "../components/about/Skills";
import { useReactToPrint } from "react-to-print";
import Experience from "../components/about/Experience";
import SoftSkills from "../components/about/SoftSkills";

export default function AboutIndex() {
  const cvRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: cvRef,
    documentTitle: "Seyed_Saleh_Moosavi_CV",
    pageStyle: `
        @page {
          size: auto;
          margin: 0;
        }
        @media print {
          .my-20 {
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
        }
      `,
  });

  return (
    <>
      {/* Download Button */}
      <article className="fixed bottom-5 right-5 space-y-2 grid z-50">
        <button
          onClick={handlePrint}
          className="p-2 bg-white rounded-lg text-black text-xs font-semibold border border-black md:border-none"
        >
          Download CV (PDF)
        </button>
      </article>
      {/* CV Mode For Print */}
      <div className="hidden">
        <div
          ref={cvRef}
          className="max-w-4xl bg-stone-200 rounded-lg my-20 p-10 mx-auto"
        >
          <CV />
        </div>
      </div>
      {/* Normal Show in Page */}
      <div className="grid lg:grid-cols-2 gap-y-10 justify-items-center items-start gap-x-5 pt-20 pb-10 px-5 min-h-screen max-w-7xl mx-auto">
        <Experience />
        <section className="w-full flex flex-col gap-10 lg:gap-24 max-w-[35rem]">
          <Skills />
          <SoftSkills />
        </section>
      </div>
    </>
  );
}
