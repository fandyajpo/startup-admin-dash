import TenantForm from "@/components/tenant/Form";
import withTenant from "@/components/tenant/Hoc/withTenant";

export const UpdateTenant = withTenant((props) => {
  return <TenantForm method="update" data={props.data} />;
});
