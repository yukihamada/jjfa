import { Outlet } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate, useLocation } from "react-router-dom";
import { Video } from "lucide-react";

export const ProfileLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentTab = location.pathname.split('/').pop() || 'basic-info';

  return (
    <div className="container mx-auto p-4 space-y-6">
      <Tabs value={currentTab} onValueChange={(value) => navigate(`/profile/${value}`)}>
        <TabsList className="w-full justify-start overflow-x-auto">
          <TabsTrigger value="basic-info">基本情報</TabsTrigger>
          <TabsTrigger value="fighter">選手情報</TabsTrigger>
          <TabsTrigger value="fighter-stats">試合成績</TabsTrigger>
          <TabsTrigger value="membership">会員情報</TabsTrigger>
          <TabsTrigger value="archives" className="flex items-center gap-2">
            <Video className="w-4 h-4" />
            アーカイブ
          </TabsTrigger>
          <TabsTrigger value="settings">設定</TabsTrigger>
        </TabsList>
      </Tabs>

      <Outlet />
    </div>
  );
};