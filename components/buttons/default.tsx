import { twMerge } from "npm:tailwind-merge";
import { JSX } from "preact";

const Button = (props: JSX.HTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      {...props}
      class={twMerge(
        "flex items-center justify-center bg-white text-black border-2 border-black shadow-[4px_4px_0px_0px] shadow-black font-semibold text-lg w-fit h-[40px] rounded-full px-5 active:shadow-none active:translate-x-[3px] active:translate-y-[3px]  m-[1px_3px_3px_1px] uppercase",
        `${props.class}`,
      )}
    />
  );
};

export default Button;
