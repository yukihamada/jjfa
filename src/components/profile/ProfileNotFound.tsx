import { Card, CardContent } from "@/components/ui/card";
import { UserRound } from "lucide-react";

export const ProfileNotFound = () => {
  return (
    <div className="container max-w-2xl py-8">
      <Card className="text-center py-12">
        <CardContent className="flex flex-col items-center justify-center space-y-4">
          <UserRound className="w-16 h-16 text-muted-foreground opacity-50" />
          <h2 className="text-2xl font-semibold">プロフィールが見つかりません</h2>
          <p className="text-muted-foreground max-w-sm">
            お探しのユーザープロフィールは存在しないか、削除された可能性があります。
          </p>
        </CardContent>
      </Card>
    </div>
  );
};