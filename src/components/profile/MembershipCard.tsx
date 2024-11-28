import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MembershipCardProps {
  member: any;
  onPurchaseNFT: () => void;
}

export const MembershipCard = ({ member, onPurchaseNFT }: MembershipCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>JJFA会員情報</CardTitle>
        <CardDescription>会員としての状態</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {member ? (
          <>
            <div className="flex items-center gap-2 text-sm">
              <Shield className="w-4 h-4 text-blue-500" />
              <span className="font-medium">会員番号:</span>
              <span>{member.membership_number}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Award className="w-4 h-4 text-green-500" />
              <span className="font-medium">会員ステータス:</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                member.membership_status === 'active' 
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {member.membership_status === 'active' ? '有効' : '審査中'}
              </span>
            </div>
          </>
        ) : (
          <div className="text-sm text-gray-500">
            会員登録がありません
          </div>
        )}
      </CardContent>
    </Card>
  );
};