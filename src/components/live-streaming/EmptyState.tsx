import { Video } from "lucide-react";

export const EmptyState = () => {
  return (
    <div className="col-span-full text-center py-8 md:py-12">
      <div className="max-w-sm mx-auto space-y-3 md:space-y-4 px-4">
        <Video className="w-10 h-10 md:w-12 md:h-12 mx-auto text-slate-300" />
        <div>
          <p className="text-base md:text-lg font-medium">現在配信中の番組はありません</p>
          <p className="text-xs md:text-sm text-slate-500">
            新しい配信が始まるのをお待ちください
          </p>
        </div>
      </div>
    </div>
  );
};