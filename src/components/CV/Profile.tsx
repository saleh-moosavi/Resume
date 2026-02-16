import Title from "./Title";

export default function Profile({ text }: { text: string }) {
  return (
    <section>
      <Title text="Profile" />
      <p className="text-sm text-gray-500 font-semibold text-justify">{text}</p>
    </section>
  );
}
