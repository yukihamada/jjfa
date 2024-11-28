import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coins } from "lucide-react";

interface DAOCardProps {
  onPurchaseNFT: () => void;
}

export const DAOCard = ({ onPurchaseNFT }: DAOCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>DAO会員情報</CardTitle>
        <CardDescription>社員権NFTの状態</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm text-gray-600">
          <p>JJFA DAOの社員権NFTを購入することで、以下の特典が得られます：</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>DAOの意思決定への参加権</li>
            <li>収益の分配</li>
            <li>特別なコミュニティアクセス</li>
          </ul>
        </div>
        <Button 
          onClick={onPurchaseNFT}
          className="w-full"
        >
          <Coins className="w-4 h-4 mr-2" />
          社員権NFTを購入
        </Button>
      </CardContent>
    </Card>
  );
};