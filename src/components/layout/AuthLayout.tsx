import { Outlet } from "react-router-dom";
import withAuth from "../auth/Hoc/withAuthorize";

export const AuthLayout = withAuth(() => {
  return <Outlet />;
});
