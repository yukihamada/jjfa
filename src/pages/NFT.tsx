import { PageTitle } from "@/components/PageTitle";
import { NFTHero } from "@/components/nft/NFTHero";
import { NFTBenefits } from "@/components/nft/NFTBenefits";
import { NFTPurchase } from "@/components/nft/NFTPurchase";

const NFT = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <PageTitle 
        title="JJFA Member Token" 
        description="社員権NFTの購入" 
      />
      <NFTHero />
      <NFTBenefits />
      <NFTPurchase />
    </div>
  );
};

export default NFT;