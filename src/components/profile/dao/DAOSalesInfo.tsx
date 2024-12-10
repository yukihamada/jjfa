import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface SalesConfig {
  max_supply: number;
  current_supply: number;
  end_date: string;
}

interface DAOSalesInfoProps {
  salesConfig: SalesConfig;
}

export const DAOSalesInfo = ({ salesConfig }: DAOSalesInfoProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-2 text-sm text-gray-600">
      <p>販売期限: {formatDate(salesConfig.end_date)}</p>
      <p>残り: {salesConfig.max_supply - (salesConfig.current_supply || 0)}枚</p>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-primary h-2 rounded-full"
          style={{
            width: `${((salesConfig.current_supply || 0) / salesConfig.max_supply) * 100}%`
          }}
        />
      </div>
    </div>
  );
};