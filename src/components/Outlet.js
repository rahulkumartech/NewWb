import { Outlet } from "react-router-dom";
const Private = () => {
  const userAuth = true;
  return <>{userAuth ? <Outlet /> : ""}</>;
};
export default Private;
