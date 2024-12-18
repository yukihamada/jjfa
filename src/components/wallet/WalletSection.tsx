import { FC } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Button } from "@/components/ui/button";

export const WalletSection: FC = () => {
  const { publicKey, disconnect } = useWallet();

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Solanaウォレット</h2>
      <div className="flex items-center gap-4">
        {publicKey ? (
          <>
            <p className="text-sm">
              接続中のウォレット: {publicKey.toBase58().slice(0, 4)}...{publicKey.toBase58().slice(-4)}
            </p>
            <Button
              variant="destructive"
              onClick={disconnect}
              size="sm"
            >
              切断
            </Button>
          </>
        ) : (
          <WalletMultiButton className="wallet-adapter-button" />
        )}
      </div>
    </div>
  );
};