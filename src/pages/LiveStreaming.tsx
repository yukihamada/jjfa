import { useState } from "react";
import { PageTitle } from "@/components/PageTitle";
import { LiveStreamList } from "@/components/live-streaming/LiveStreamList";
import { CreateStreamDialog } from "@/components/live-streaming/CreateStreamDialog";
import { Button } from "@/components/ui/button";
import { Plus, Video, Users, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";

const LiveStreaming = () => {
  const [showCreateDialog, setShowCreateDialog] = useState(false);

  const stats = [
    { label: "ライブ配信中", value: "12", icon: Video },
    { label: "視聴者数", value: "1,234", icon: Users },
    { label: "総配信時間", value: "256時間", icon: Trophy },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header section with proper padding to avoid navbar overlap */}
      <div className="pt-24 pb-8 px-4 bg-slate-900 text-white">
        <div className="container mx-auto space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">ライブ配信</h1>
              <p className="text-slate-300">
                世界中の柔術家たちとリアルタイムで繋がろう
              </p>
            </div>
            <Button 
              onClick={() => setShowCreateDialog(true)} 
              className="bg-white text-slate-900 hover:bg-slate-100 gap-2"
            >
              <Plus className="w-4 h-4" />
              配信を始める
            </Button>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stats.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="bg-slate-800 border-slate-700 p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-700 rounded-lg">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-300">{label}</p>
                    <p className="text-2xl font-bold">{value}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">配信一覧</h2>
            <div className="flex gap-2">
              {/* Add filter/sort options here if needed */}
            </div>
          </div>
          <LiveStreamList />
        </div>
      </div>

      <CreateStreamDialog 
        open={showCreateDialog} 
        onOpenChange={setShowCreateDialog} 
      />
    </div>
  );
};

export default LiveStreaming;