import { ReactNode } from "react";

export default function ContentWrapper({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <article className="rounded-lg self-center relative w-full my-shadow h-full">
      <h2 className="absolute -top-4 font-semibold text-2xl xl:text-3xl xl:-top-5 bg-my-white dark:bg-my-black">
        {title}
      </h2>
      <section className="pt-10">{children}</section>
    </article>
  );
}
