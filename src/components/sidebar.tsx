import { ReactNode } from "react";

const Sidebar = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-[12%] min-h-full bg-neutral-950 p-4">
      <h1 className="text-sm mb-1 text-white">History</h1>
      {children}
    </div>
  );
};

export default Sidebar;