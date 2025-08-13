import { Outlet } from "react-router-dom";
import { AppMainCover } from "./style";

export const AuthLayout = () => {
  return (
    <AppMainCover>
      <Outlet />
    </AppMainCover>
  );
};
