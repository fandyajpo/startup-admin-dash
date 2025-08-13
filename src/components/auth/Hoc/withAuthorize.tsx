import { useSession } from "@/modules/auth/auth.hooks";
import { Navigate } from "react-router-dom";

export default function withAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const ComponentWithAuth = (props: P) => {
    const { data, isPending } = useSession();

    if (isPending) return <p>Loading...</p>;

    if (data?.data?.user) return <Navigate to={"/"} />;

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
}
