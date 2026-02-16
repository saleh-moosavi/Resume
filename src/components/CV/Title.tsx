export default function Title({ text }: { text: string }) {
  return (
    <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-500 pb-2 mb-3">
      {text}
    </h2>
  );
}
