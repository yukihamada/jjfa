import { useOutletContext } from "react-router-dom";

const FighterStats = () => {
  const context = useOutletContext<any>();
  return <div>Fighter Stats Page</div>;
};

export default FighterStats;