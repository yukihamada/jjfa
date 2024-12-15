import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coins, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { DAOBenefits } from "./dao/DAOBenefits";
import { DAOSalesInfo } from "./dao/DAOSalesInfo";
import { useNFTPurchase } from "@/hooks/useNFTPurchase";
import { toast } from "sonner";

interface DAOCardProps {
  onPurchaseNFT: () => void;
}

export const DAOCard = ({ onPurchaseNFT }: DAOCardProps) => {
  const { loading, handlePurchase } = useNFTPurchase(onPurchaseNFT);

  const { data: salesConfig, isLoading: isLoadingSalesConfig } = useQuery({
    queryKey: ['nftSalesConfig'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('nft_sales_config')
        .select('*')
        .single();
      
      if (error) throw error;
      return data;
    },
  });

  const handleClick = async () => {
    try {
      await handlePurchase();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "購入処理中にエラーが発生しました");
    }
  };

  const isSoldOut = salesConfig && (salesConfig.current_supply || 0) >= salesConfig.max_supply;
  const isSaleEnded = salesConfig && new Date() > new Date(salesConfig.end_date);
  const isDisabled = loading || isLoadingSalesConfig || isSoldOut || isSaleEnded;

  return (
    <Card>
      <CardHeader>
        <CardTitle>DAO会員情報</CardTitle>
        <CardDescription>社員権NFTの状態</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <DAOBenefits />
        {salesConfig && <DAOSalesInfo salesConfig={salesConfig} />}
        
        <Button 
          onClick={handleClick}
          className="w-full"
          disabled={isDisabled}
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              処理中...
            </>
          ) : (
            <>
              <Coins className="w-4 h-4 mr-2" />
              社員権NFTを購入
            </>
          )}
        </Button>

        {isSoldOut && (
          <p className="text-sm text-red-600 text-center">完売しました</p>
        )}
        {isSaleEnded && (
          <p className="text-sm text-red-600 text-center">販売期間が終了しました</p>
        )}
      </CardContent>
    </Card>
  );
};