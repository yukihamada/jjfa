import { useOutletContext } from "react-router-dom";

const Fighter = () => {
  const context = useOutletContext<any>();
  return <div>Fighter Profile Page</div>;
};

export default Fighter;