export const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-my-black/70 flex justify-center items-center">
      <div className="w-16 h-16 rounded-full border-8 border-x-my-lightpurple border-y-my-lightblue animate-spin"></div>
    </div>
  );
};
