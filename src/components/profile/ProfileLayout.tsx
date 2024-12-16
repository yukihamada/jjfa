import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PenSquare } from "lucide-react";

interface ProfileLayoutProps {
  children: ReactNode;
}

export const ProfileLayout = ({ children }: ProfileLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Button
          onClick={() => navigate("/community")}
          className="w-full gap-2"
        >
          <PenSquare className="w-4 h-4" />
          投稿する
        </Button>
      </div>
      {children}
    </div>
  );
};