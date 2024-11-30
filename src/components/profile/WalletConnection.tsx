import { FC, useMemo } from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

require('@solana/wallet-adapter-react-ui/styles.css');

export const WalletConnection: FC = () => {
  const { publicKey } = useWallet();

  const walletAddress = useMemo(() => {
    if (!publicKey) return '';
    return `${publicKey.toString().slice(0, 4)}...${publicKey.toString().slice(-4)}`;
  }, [publicKey]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>ウォレット接続</CardTitle>
        <CardDescription>
          SolanaウォレットをJJFAアカウントに接続します
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {publicKey ? (
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">接続中のウォレット:</p>
            <p className="font-mono">{walletAddress}</p>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">
            ウォレットを接続してください
          </p>
        )}
        <WalletMultiButton className="w-full bg-slate-800 hover:bg-slate-700" />
      </CardContent>
    </Card>
  );
};