import { IS_BROWSER } from "$fresh/runtime.ts";
import { twMerge } from "npm:tailwind-merge";
import { JSX } from "preact";

const CircleButton = (props: JSX.HTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class={twMerge(
        "w-10 h-10 rounded-full border-2 border-black bg-white text-black shadow-[4px_4px_0px] shadow-black text-lg flex justify-center items-center cursor-pointer active:shadow-none active:translate-x-[3px] active:translate-y-[3px] m-[1px_3px_3px_1px] p-2 uppercase",
        `${props.class}`,
      )}
    />
  );
};

export default CircleButton;
