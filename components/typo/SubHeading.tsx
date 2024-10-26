import type { ComponentChildren } from "preact";

type Props = {
  children: ComponentChildren;
};

const SubHeading = ({ children }: Props) => {
  return (
    <h2 class="text-2xl font-bold">
      {children}
    </h2>
  );
};

export default SubHeading;
