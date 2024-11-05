import { twMerge } from "npm:tailwind-merge";
import type { JSX } from "preact/jsx-runtime";

const FixedScrollSection = (
  props: JSX.HTMLAttributes<HTMLElement>,
) => {
  return (
    <section
      {...props}
      class={twMerge("h-screen relative", `${props.class}`)}
    >
      <div class="absolute top-0 left-0 right-0 bottom-0 clip-container z-[1]">
        <div class="fixed top-0 left-0 right-0 p-0 h-full z-[2]">
          <div class="h-full relative max-w-[58.333333%] left-[41.666667%]">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FixedScrollSection;
