import { ReactNode } from "react";

interface ProfileLayoutProps {
  children: ReactNode;
}

export const ProfileLayout = ({ children }: ProfileLayoutProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      {children}
    </div>
  );
};