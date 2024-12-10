import { useOutletContext } from "react-router-dom";

const Membership = () => {
  const context = useOutletContext<any>();
  return <div>Membership Page</div>;
};

export default Membership;