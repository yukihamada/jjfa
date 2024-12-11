import { Card, CardContent } from "@/components/ui/card";
import { User2 } from "lucide-react";

interface ProfileBioProps {
  bio: string | null;
}

export const ProfileBio = ({ bio }: ProfileBioProps) => {
  if (!bio) {
    return (
      <Card className="mt-6">
        <CardContent className="text-center py-8 text-muted-foreground">
          <User2 className="w-12 h-12 mx-auto mb-4 opacity-30" />
          自己紹介文はまだ設定されていません
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mt-6">
      <CardContent className="py-6">
        <h3 className="font-medium text-lg flex items-center gap-2 mb-4">
          <User2 className="w-5 h-5 text-blue-500" />
          自己紹介
        </h3>
        <div className="prose dark:prose-invert max-w-none">
          <p className="whitespace-pre-wrap">{bio}</p>
        </div>
      </CardContent>
    </Card>
  );
};