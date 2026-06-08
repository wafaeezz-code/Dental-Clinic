import { type ReactNode } from "react";
import { NavBar } from "./NavBar";

interface PageWrapperProps {
  children: ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="relative">
      <NavBar />
        <div className="pt-16 md:pt-20 lg:pt-28">
      {children}
        </div>
    </div>
  );
}
