import InclusionForm from "@/components/inclusion/Form";
import withInclusion from "@/components/inclusion/Hoc/withInclusion";

const UpdateInclusion = withInclusion((props) => {
  return <InclusionForm method="update" data={props.data} />;
});

export default UpdateInclusion;
