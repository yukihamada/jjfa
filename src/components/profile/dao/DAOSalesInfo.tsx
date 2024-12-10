import { formatDate } from "@/lib/utils";

interface DAOSalesInfoProps {
  salesConfig: {
    end_date: string;
    max_supply: number;
    current_supply: number;
  };
}

export const DAOSalesInfo = ({ salesConfig }: DAOSalesInfoProps) => {
  return (
    <div className="mt-4">
      <p className="font-medium">価格: ¥100,000</p>
      <p className="mt-2">販売期限: {formatDate(salesConfig.end_date)}</p>
      <p>
        残り: {Math.max(0, salesConfig.max_supply - (salesConfig.current_supply || 0))}枚 
        <span className="text-xs text-gray-500">（限定{salesConfig.max_supply}枚）</span>
      </p>
    </div>
  );
};