import ModulesLayoutIndex from "$/layout/ModulesLayout";

export default function ModulesLayout(
  props: Readonly<{
    children: React.ReactNode;
  }>,
) {
  return <ModulesLayoutIndex {...props} />;
}
