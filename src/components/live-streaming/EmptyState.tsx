import { Video } from "lucide-react";

export const EmptyState = () => {
  return (
    <div className="col-span-full text-center py-12">
      <div className="max-w-sm mx-auto space-y-4">
        <Video className="w-12 h-12 mx-auto text-slate-300" />
        <div>
          <p className="text-lg font-medium">現在配信中の番組はありません</p>
          <p className="text-sm text-slate-500">
            新しい配信が始まるのをお待ちください
          </p>
        </div>
      </div>
    </div>
  );
};