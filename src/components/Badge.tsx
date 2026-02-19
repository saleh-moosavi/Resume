import { ReactNode } from "react";

export default function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block bg-my-lightgray text-my-black text-xs font-semibold px-2 py-1 rounded-lg select-none">
      {children}
    </span>
  );
}
