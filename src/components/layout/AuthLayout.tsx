import { Outlet } from "react-router-dom";
import { useSession } from "@/modules/auth/auth.hooks";
const AuthLayout = () => {
  const { data } = useSession();
  return (
    <div>
      <p>2025-08-17T09:21:28.854Z</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
