export default function withAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const ComponentWithAuth = (props: P) => {
    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
}
