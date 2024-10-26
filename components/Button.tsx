import { IS_BROWSER } from "$fresh/runtime.ts";
import { JSX } from "preact";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="w-10 h-10 rounded-full border-2 border-black bg-white shadow-[4px_4px_0px] shadow-black text-[23px] flex justify-center items-center transition-all duration-200 cursor-pointer active:shadow-none active:translate-x-[3px] active:translate-y-[3px]"
    />
  );
}
