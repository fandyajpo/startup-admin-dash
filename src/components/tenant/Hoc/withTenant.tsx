import { useGetTenantById } from "@/modules/tenant/tenant.hooks";
import { TenantSchemaWithId } from "@/modules/tenant/tenant.typing";
import { useParams } from "react-router-dom";

export default function withAuth<P extends object>(
  WrappedComponent: React.ComponentType<P & { data?: TenantSchemaWithId }>
) {
  const ComponentWithAuth = (props: P) => {
    const { data, isPending } = useGetTenantById();

    if (isPending) {
      return <p>Loading...</p>;
    }

    return (
      <>
        <WrappedComponent {...props} data={data?.data?.data} />
      </>
    );
  };

  return ComponentWithAuth;
}
