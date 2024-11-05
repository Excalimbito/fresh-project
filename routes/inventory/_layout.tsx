import type { PageProps } from "$fresh/server.ts";

const _layout = ({ Component }: PageProps) => {
  return (
    <div class="m-3">
      <Component />
    </div>
  );
};

export default _layout;
