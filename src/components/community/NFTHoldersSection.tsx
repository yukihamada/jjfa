import { useQuery } from "@tanstack/react-query";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock } from "lucide-react";

export const NFTHoldersSection = () => {
  const { data: isNFTHolder, isLoading, error } = useQuery({
    queryKey: ['nftStatus'],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return false;

      const { data, error } = await supabase
        .rpc('check_user_nft_status', {
          user_uuid: user.id
        });

      if (error) throw error;
      return data;
    },
  });

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertDescription>
          NFTステータスの確認中にエラーが発生しました。
        </AlertDescription>
      </Alert>
    );
  }

  if (isLoading) {
    return <Skeleton className="h-48" />;
  }

  if (!isNFTHolder) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="w-5 h-5" />
            NFTホルダー限定コンテンツ
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600">
            このコンテンツはJJFA NFTホルダーのみがアクセスできます。
            NFTを購入して限定コンテンツにアクセスしましょう。
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>NFTホルダー限定コンテンツ</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-slate-600">
            JJFAコミュニティのNFTホルダー限定コンテンツへようこそ！
          </p>
          {/* ここに限定コンテンツを追加 */}
          <div className="grid gap-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">限定イベント情報</h3>
                <p className="text-sm text-slate-600">
                  次回のNFTホルダー限定イベントは準備中です。
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">DAO提案</h3>
                <p className="text-sm text-slate-600">
                  コミュニティの意思決定に参加しましょう。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};