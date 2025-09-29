export const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center">
      <div className="w-16 h-16 rounded-full border-8 border-white border-x-[#e600ff] border-y-[#0066ff] animate-spin"></div>
    </div>
  );
};
