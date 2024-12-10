import { useOutletContext } from "react-router-dom";

const Settings = () => {
  const context = useOutletContext<any>();
  return <div>Settings Page</div>;
};

export default Settings;