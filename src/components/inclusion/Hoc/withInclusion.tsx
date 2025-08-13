import { useGetInclusionById } from "@/modules/inclusion/inclusion.hooks";
import { TenantSchemaWithId } from "@/modules/tenant/tenant.typing";

export default function withInclusion<P extends object>(
  WrappedComponent: React.ComponentType<P & { data?: TenantSchemaWithId }>
) {
  const Component = (props: P) => {
    const { data, isPending } = useGetInclusionById();
    if (isPending) return <p>Loading...</p>;
    return <WrappedComponent {...props} data={data?.data?.data} />;
  };

  return Component;
}
